"""Local preview: double-click OPEN-PREVIEW.cmd (or run: py -3 preview_server.py)."""
from __future__ import annotations

import http.server
import os
import socketserver
import threading
import time
import webbrowser

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = 8088


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass


def _open_browser() -> None:
    time.sleep(0.6)
    webbrowser.open(f"http://127.0.0.1:{PORT}/index.html")


def main() -> None:
    os.chdir(ROOT)
    threading.Thread(target=_open_browser, daemon=True).start()
    with socketserver.TCPServer(("127.0.0.1", PORT), QuietHandler) as httpd:
        print(f"Serving folder:\n  {ROOT}\n")
        print(f"URL: http://127.0.0.1:{PORT}/index.html")
        print("Press Ctrl+C in this window to stop.\n")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopped.")


if __name__ == "__main__":
    main()
