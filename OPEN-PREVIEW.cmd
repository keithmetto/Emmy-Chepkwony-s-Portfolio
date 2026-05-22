@echo off
cd /d "%~dp0"
title Emmy portfolio — local preview
where py >nul 2>nul
if errorlevel 1 (
  echo.
  echo  Python was not found on PATH.
  echo  Install from https://www.python.org/downloads/ ^(check "Add python.exe to PATH"^)
  echo  OR double-click index.html to open the site without a server.
  echo.
  pause
  exit /b 1
)
echo.
py -3 "%~dp0preview_server.py"
pause
