#!/usr/bin/env python3
"""
将 articles 目录下的所有 Markdown 文件内容嵌入到 article.js 中
这样 article.html 就可以在 file:// 协议下正常工作，无需 fetch()
"""

import os
import json
import re
from pathlib import Path

# 路径配置
BLOG_DIR = Path(__file__).parent
ARTICLES_DIR = BLOG_DIR / "articles"
JS_DIR = BLOG_DIR / "js"
ARTICLE_JS_PATH = JS_DIR / "article.js"

def read_markdown_files():
    """读取所有 markdown 文件，返回 {filename: content} 字典"""
    articles = {}
    for md_file in ARTICLES_DIR.glob("*.md"):
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
                articles[md_file.name] = content
                print(f"✓ 读取: {md_file.name} ({len(content)} 字符)")
        except Exception as e:
            print(f"✗ 错误读取 {md_file.name}: {e}")
    return articles

def escape_js_string(s):
    """转义 JavaScript 字符串中的特殊字符"""
    s = s.replace('\\', '\\\\')
    s = s.replace('"', '\\"')
    s = s.replace('\n', '\\n')
    s = s.replace('\r', '\\r')
    s = s.replace('\t', '\\t')
    return s

def generate_article_js(articles_dict):
    """生成包含文章内容的 article.js"""
    
    # 读取现有的 article.js（保留文章数据结构和渲染逻辑）
    with open(ARTICLE_JS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 为每个文章数据添加 content 字段
    # 匹配格式: "file": "filename.md",
    # 在其后添加: "content": "markdown content",
    
    def replace_file_with_content(match):
        file_path = match.group(1)
        file_name = file_path.split('/')[-1]  # 获取文件名
        
        if file_name in articles_dict:
            content_text = escape_js_string(articles_dict[file_name])
            # 检查是否已经有 content 字段，避免重复添加
            remaining = match.string[match.end():]
            # 检查后面是否已经有 "content" 字段
            if '"content"' in remaining[:200]:  # 在接下来一小段文本中检查
                print(f"  ⏭️  跳过（已有content）: {file_name}")
                return match.group(0)
            return f'"file": "{file_path}",\n                        "content": "{content_text}",'
        else:
            print(f"  ⚠️  未找到对应的 markdown 文件: {file_name}")
            return match.group(0)
    
    # 使用正则表达式替换
    pattern = r'"file":\s*"([^"]+)"'
    new_content = re.sub(pattern, replace_file_with_content, content)
    
    # 备份原文件
    backup_path = ARTICLE_JS_PATH.with_suffix('.js.backup')
    with open(backup_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"\n✓ 已备份原文件到: {backup_path}")
    
    # 写入新文件
    with open(ARTICLE_JS_PATH, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"✓ 已更新: {ARTICLE_JS_PATH}")
    print(f"✓ 嵌入了 {len(articles_dict)} 篇文章的内容")

def modify_load_function():
    """修改 article.js 中的 loadMarkdownContent 函数，使其优先使用内嵌的 content"""
    
    with open(ARTICLE_JS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 替换 loadMarkdownContent 函数
    old_function = '''// 加载Markdown文件内容
function loadMarkdownContent(filename) {
    var markdownPath = 'articles/' + filename;
    
    fetch(markdownPath)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('HTTP ' + response.status + ': ' + response.statusText);
            }
            return response.text();
        })
        .then(function(markdownText) {
            renderMarkdown(markdownText);
        })
        .catch(function(error) {
            console.error('Error loading markdown:', error);
            var contentDiv = document.querySelector('#articleBody .markdown-body');
            if (contentDiv) {
                contentDiv.innerHTML = '<p class="error">Fehler beim Laden des Artikelinhalts: ' + error.message + '</p>' +
                    '<p>Die Datei <code>' + markdownPath + '</code> konnte nicht geladen werden.</p>';
            }
        });
}'''
    
    new_function = '''// 加载Markdown内容（优先使用内嵌内容，无需fetch）
function loadMarkdownContent(article) {
    // 如果有内嵌的内容，直接使用
    if (article.content) {
        console.log('Using embedded content for:', article.title);
        renderMarkdown(article.content);
        return;
    }
    
    // 否则尝试加载外部文件（需要HTTP服务器）
    var markdownPath = 'articles/' + article.file;
    
    fetch(markdownPath)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('HTTP ' + response.status + ': ' + response.statusText);
            }
            return response.text();
        })
        .then(function(markdownText) {
            renderMarkdown(markdownText);
        })
        .catch(function(error) {
            console.error('Error loading markdown:', error);
            var contentDiv = document.querySelector('#articleBody .markdown-body');
            if (contentDiv) {
                contentDiv.innerHTML = '<p class="error">Fehler beim Laden des Artikelinhalts: ' + error.message + '</p>' +
                    '<p>Die Datei <code>' + markdownPath + '</code> konnte nicht geladen werden.</p>' +
                    '<p><strong>Hinweis:</strong> Bitte öffnen Sie diese Seite über einen Web-Server (z.B. <code>python -m http.server</code>), ' +
                    'da <code>file://</code> Protokoll keine externen Dateien laden darf.</p>';
            }
        });
}'''
    
    if old_function in content:
        content = content.replace(old_function, new_function)
        
        # 同时修改调用方式（传递整个article对象而不是仅文件名）
        content = content.replace(
            'loadMarkdownContent(article.file);',
            'loadMarkdownContent(article);'
        )
        
        with open(ARTICLE_JS_PATH, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print("✓ 已修改 loadMarkdownContent 函数，现在优先使用内嵌内容")
    else:
        print("⚠️  未找到需要替换的 loadMarkdownContent 函数，请手动检查")

def main():
    print("=" * 60)
    print("嵌入 Markdown 内容到 article.js")
    print("=" * 60)
    print()
    
    # 1. 读取所有 markdown 文件
    print("📖 读取 Markdown 文件...")
    articles_dict = read_markdown_files()
    print(f"✓ 共读取 {len(articles_dict)} 个文件\n")
    
    if not articles_dict:
        print("❌ 没有找到任何 markdown 文件，退出")
        return
    
    # 2. 生成新的 article.js
    print("🔧 嵌入内容到 article.js...")
    generate_article_js(articles_dict)
    print()
    
    # 3. 修改加载函数
    print("🔧 修改加载函数...")
    modify_load_function()
    print()
    
    print("=" * 60)
    print("✅ 完成！现在 article.html 可以在 file:// 协议下工作了")
    print("=" * 60)

if __name__ == "__main__":
    main()
