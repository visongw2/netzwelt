#!/bin/bash
# Build script for Cloudflare Pages/Workers deployment
# This script copies website files to public/ directory for deployment

set -e  # Exit on error

echo "==> Starting build process..."

# Create public directory structure
mkdir -p public/images

# Copy HTML files
cp -f index.html public/ 2>/dev/null || true
cp -f article.html public/ 2>/dev/null || true
cp -f category.html public/ 2>/dev/null || true
cp -f about.html public/ 2>/dev/null || true
cp -f impressum.html public/ 2>/dev/null || true
cp -f datenschutz.html public/ 2>/dev/null || true
cp -f faq.html public/ 2>/dev/null || true
cp -f cookie-richtlinie.html public/ 2>/dev/null || true
cp -f 404.html public/ 2>/dev/null || true

# Copy directories
cp -rf css/ public/ 2>/dev/null || true
cp -rf js/ public/ 2>/dev/null || true
cp -rf images/ public/ 2>/dev/null || true

# Copy root files
cp -f favicon.ico public/ 2>/dev/null || true
cp -f robots.txt public/ 2>/dev/null || true
cp -f sitemap.xml public/ 2>/dev/null || true
cp -f rss.xml public/ 2>/dev/null || true

echo "==> Build complete! Files copied to public/"
echo "==> Public directory contents:"
ls -lh public/
