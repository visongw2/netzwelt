#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
将 articles 目录下的所有 Markdown 文件内容嵌入到 article.js 中
修正版：正确处理 UTF-8 编码
"""

import os
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
                print(f"? 读取: {md_file.name} ({len(content)} 字符)")
        except Exception as e:
            print(f"? 错误读取 {md_file.name}: {e}")
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
    
    # 读取现有的 article.js
    with open(ARTICLE_JS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 为每个文章数据添加 content 字段
    def replace_file_with_content(match):
        # match.group(0) 是完整匹配，match.group(1) 是文件名
        full_match = match.group(0)
        file_name = match.group(1)
        
        if file_name in articles_dict:
            content_text = escape_js_string(articles_dict[file_name])
            # 在 "file": "xxx.md" 后面插入 "content": "xxx",
            return full_match + ',\n                        "content": "' + content_text + '"'
        else:
            print(f"  ⚠️  未找到对应的 markdown 文件: {file_name}")
            return full_match
    
    # 使用正则表达式替换
    pattern = r'("file":\s*"([^"]+)")'
    new_content = re.sub(pattern, replace_file_with_content, content)
    
    # 备份原文件
    backup_path = ARTICLE_JS_PATH.with_suffix('.js.backup2')
    with open(backup_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"\n? 已备份原文件到: {backup_path.name}\n")
    
    # 写入新文件
    with open(ARTICLE_JS_PATH, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"? 已更新: {ARTICLE_JS_PATH.name}")
    print(f"? 嵌入了 {len(articles_dict)} 篇文章的内容")

def modify_load_function():
    """修改 article.js 中的 loadMarkdownContent 函数，使其优先使用内嵌的 content"""
    
    with open(ARTICLE_JS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 新的 loadMarkdownContent 函数
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
    
    # 查找并替换 loadMarkdownContent 函数
    # 找到函数的开始和结束
    start_marker = '// 加载Markdown文件内容'
    if start_marker not in content:
        start_marker = '// 加载Markdown内容'
    
    if start_marker in content:
        # 找到函数开始的位置
        start_idx = content.find(start_marker)
        # 找到函数结束的位置（下一个函数或文件结束）
        next_func_idx = content.find('\n//', start_idx + 10)
        if next_func_idx == -1:
            next_func_idx = len(content)
        
        # 替换函数
        content = content[:start_idx] + new_function + content[next_func_idx:]
        
        # 同时修改调用方式（传递整个article对象而不是仅文件名）
        content = content.replace(
            'loadMarkdownContent(article.file);',
            'loadMarkdownContent(article);'
        )
        
        # 写回文件
        with open(ARTICLE_JS_PATH, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print("? 已修改 loadMarkdownContent 函数，现在优先使用内嵌内容")
        print("? 已修改调用方式：loadMarkdownContent(article)\n")
    else:
        print("⚠️  未找到需要替换的 loadMarkdownContent 函数，请手动检查\n")

def main():
    print("=" * 60)
    print("嵌入 Markdown 内容到 article.js (UTF-8 修正版)")
    print("=" * 60)
    print()
    
    # 1. 读取所有 markdown 文件
    print("? 读取 Markdown 文件...")
    articles_dict = read_markdown_files()
    print(f"? 共读取 {len(articles_dict)} 个文件\n")
    
    if not articles_dict:
        print("? 没有找到任何 markdown 文件，退出")
        return
    
    # 2. 生成新的 article.js
    print("? 嵌入内容到 article.js...")
    generate_article_js(articles_dict)
    
    # 3. 修改加载函数
    print("? 修改加载函数...")
    modify_load_function()
    
    print("=" * 60)
    print("? 完成！现在 article.html 可以在 file:// 协议下工作了")
    print("=" * 60)

if __name__ == "__main__":
    main()
