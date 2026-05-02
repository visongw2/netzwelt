#!/usr/bin/env python3
"""Einfacher HTTP-Server für den Blog"""

import http.server
import socketserver
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Server läuft auf Port {PORT}")
    print(f"Öffnen Sie: http://localhost:{PORT}")
    httpd.serve_forever()
