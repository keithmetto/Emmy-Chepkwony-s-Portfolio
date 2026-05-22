(function () {
  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function setNavOpen(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = !nav.classList.contains("is-open");
      setNavOpen(open);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setNavOpen(false);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setNavOpen(false);
      }
    });
  }
})();

(function () {
  const panel = document.getElementById("search-panel");
  const input = document.getElementById("search-input");
  const resultsEl = document.getElementById("search-results");
  const emptyEl = document.getElementById("search-empty");
  const trigger = document.querySelector(".search-trigger");
  const main = document.getElementById("main");

  if (!panel || !input || !resultsEl || !main) return;

  let index = [];
  let activeResult = -1;

  function normalize(text) {
    return text
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  function snippet(text, max) {
    const clean = text.replace(/\s+/g, " ").trim();
    if (clean.length <= max) return clean;
    return clean.slice(0, max - 1) + "…";
  }

  function addEntry(entries, title, body, el, category) {
    const text = normalize(title + " " + body);
    if (!text) return;
    entries.push({
      title: title.trim(),
      text: text,
      snippet: snippet(body || title, 140),
      category: category,
      el: el,
      hash: el.id ? "#" + el.id : null,
    });
  }

  function buildIndex() {
    const entries = [];

    const hero = document.querySelector(".hero");
    if (hero) {
      addEntry(entries, "Emmy Chepkwony — Introduction", hero.innerText, hero, "Overview");
    }

    main.querySelectorAll("section[id]").forEach(function (section) {
      const heading =
        section.querySelector(".section-header h2, h2")?.textContent || section.id;
      addEntry(entries, heading, section.innerText, section, "Section");
    });

    main.querySelectorAll(".timeline-item").forEach(function (item, i) {
      const h = item.querySelector("h3");
      const title = h ? h.textContent : "Experience " + (i + 1);
      if (!item.id) item.id = "exp-" + (i + 1);
      addEntry(entries, title, item.innerText, item, "Experience");
    });

    main.querySelectorAll(".impact-card").forEach(function (card, i) {
      const h = card.querySelector("h3");
      const title = h ? h.textContent : "Impact " + (i + 1);
      if (!card.id) card.id = "impact-" + (i + 1);
      addEntry(entries, title, card.innerText, card, "Impact");
    });

    const tagSeen = new Set();
    main.querySelectorAll(".tags span").forEach(function (tag) {
      const label = tag.textContent.trim();
      if (!label || tagSeen.has(label)) return;
      tagSeen.add(label);
      const section = tag.closest("section");
      addEntry(entries, label, label, section || tag, "Expertise");
    });

    return entries;
  }

  function matchEntry(entry, words) {
    return words.every(function (w) {
      return entry.text.indexOf(w) !== -1;
    });
  }

  function matchEntryAny(entry, words) {
    return words.some(function (w) {
      return entry.text.indexOf(w) !== -1;
    });
  }

  function runSearch(query) {
    const q = normalize(query);
    if (!q) return [];

    const words = q.split(" ").filter(Boolean);
    let hits = index.filter(function (e) {
      return matchEntry(e, words);
    });
    if (hits.length === 0) {
      hits = index.filter(function (e) {
        return matchEntryAny(e, words);
      });
    }

    const seen = new Set();
    return hits.filter(function (e) {
      const key = e.title + "|" + e.category;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }).slice(0, 12);
  }

  function renderResults(hits) {
    resultsEl.innerHTML = "";
    activeResult = -1;
    const suggestions = document.getElementById("search-suggestions");
    const hasQuery = Boolean(input.value.trim());

    if (suggestions) {
      suggestions.hidden = hasQuery && hits.length > 0;
    }

    if (hits.length === 0) {
      emptyEl.hidden = !hasQuery;
      return;
    }

    emptyEl.hidden = true;

    hits.forEach(function (hit, i) {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "search-result";
      btn.setAttribute("role", "option");
      btn.dataset.index = String(i);
      btn.innerHTML =
        '<span class="search-result-cat">' +
        hit.category +
        "</span>" +
        '<span class="search-result-title">' +
        hit.title +
        "</span>" +
        '<span class="search-result-snippet">' +
        hit.snippet +
        "</span>";
      btn.addEventListener("click", function () {
        goTo(hit);
      });
      li.appendChild(btn);
      resultsEl.appendChild(li);
    });
  }

  function goTo(hit) {
    closeSearch();
    setNavClosed();
    const target = hit.el;
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    target.classList.add("search-highlight");
    window.setTimeout(function () {
      target.classList.remove("search-highlight");
    }, 2200);
    if (hit.hash && target.id) {
      history.replaceState(null, "", hit.hash);
    }
  }

  function setNavClosed() {
    const nav = document.getElementById("site-nav");
    const toggle = document.querySelector(".nav-toggle");
    if (nav) nav.classList.remove("is-open");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }
  }

  function openSearch() {
    panel.hidden = false;
    document.body.classList.add("search-open");
    if (trigger) trigger.setAttribute("aria-expanded", "true");
    window.setTimeout(function () {
      input.focus();
      input.select();
    }, 50);
    renderResults(runSearch(input.value));
  }

  function closeSearch() {
    panel.hidden = true;
    document.body.classList.remove("search-open");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
    input.value = "";
    resultsEl.innerHTML = "";
    emptyEl.hidden = true;
    activeResult = -1;
  }

  function setActiveResult(next) {
    const buttons = resultsEl.querySelectorAll(".search-result");
    if (!buttons.length) return;
    activeResult = (next + buttons.length) % buttons.length;
    buttons.forEach(function (b, i) {
      b.classList.toggle("is-active", i === activeResult);
      if (i === activeResult) b.focus();
    });
  }

  index = buildIndex();

  var isMac =
    typeof navigator !== "undefined" &&
    /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);
  var modKbd = document.querySelector(".search-kbd-mod");
  if (modKbd && isMac) modKbd.textContent = "⌘";

  document.querySelectorAll("[data-search-q]").forEach(function (chip) {
    chip.addEventListener("click", function () {
      var q = chip.getAttribute("data-search-q") || "";
      input.value = q;
      renderResults(runSearch(q));
      input.focus();
    });
  });

  if (trigger) {
    trigger.addEventListener("click", function () {
      if (panel.hidden) openSearch();
      else closeSearch();
    });
  }

  panel.querySelectorAll("[data-search-close]").forEach(function (el) {
    el.addEventListener("click", closeSearch);
  });

  input.addEventListener("input", function () {
    renderResults(runSearch(input.value));
  });

  input.addEventListener("keydown", function (e) {
    const buttons = resultsEl.querySelectorAll(".search-result");
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveResult(activeResult + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveResult(activeResult - 1);
    } else if (e.key === "Enter" && activeResult >= 0 && buttons[activeResult]) {
      e.preventDefault();
      buttons[activeResult].click();
    } else if (e.key === "Enter" && buttons.length === 1) {
      e.preventDefault();
      buttons[0].click();
    }
  });

  document.addEventListener("keydown", function (e) {
    const mod = e.ctrlKey || e.metaKey;
    if (mod && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (panel.hidden) openSearch();
      else closeSearch();
      return;
    }
    if (e.key === "Escape" && !panel.hidden) {
      e.preventDefault();
      closeSearch();
    }
  });

  window.PortfolioSearch = { open: openSearch, close: closeSearch, search: runSearch };
})();
