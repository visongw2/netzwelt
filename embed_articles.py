#!/usr/bin/env python3
"""
注意: 此脚本已被改为 NOP (无操作版本)
文章内容通过 fetch() 动态加载，无需嵌入到 article.js。
直接将 markdown 文件放置在 articles/ 目录即可。

原因: 嵌入 markdown 内容到 JS 字符串会导致 SyntaxError，
因为 markdown 内容中含有双引号、特殊字符等无法安全转义的字符。
"""

import os
import re
from pathlib import Path

BLOG_DIR = Path(__file__).parent
ARTICLES_DIR = BLOG_DIR / "articles"
JS_DIR = BLOG_DIR / "js"
ARTICLE_JS_PATH = JS_DIR / "article.js"

def remove_embedded_content():
    """移除 article.js 中所有嵌入的 content 字段（如有）"""
    
    with open(ARTICLE_JS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if '"content"' not in content:
        print("✓ article.js 中没有嵌入的 content 字段，无需处理")
        return
    
    # 使用正则表达式移除所有 content 字段
    # 匹配: ,\n....."content": "...",  直到下一行的 "image" 或 "}"
    pattern = r',\s*"content"\s*:\s*"[\\s\\S]*?"\s*(?=,\s*"|\\n\s*\})'
    result = re.sub(pattern, '', content, flags=re.DOTALL)
    
    # 如果简单正则没处理完，再用行级处理
    lines = result.split('\n')
    clean_lines = []
    in_content = False
    
    for line in lines:
        stripped = line.strip()
        if stripped.startswith('"content"'):
            in_content = True
            continue
        if in_content:
            if stripped.endswith('",') or stripped.endswith('"'):
                in_content = False
                continue
        else:
            clean_lines.append(line)
    
    new_content = '\n'.join(clean_lines)
    
    with open(ARTICLE_JS_PATH, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("✓ 已移除 article.js 中的所有嵌入 content 字段")
    print("✓ 文章内容将通过 fetch() 从 articles/ 目录动态加载")

def check_markdown_files():
    """检查所有在 article.js 中引用的 markdown 文件是否存在"""
    
    with open(ARTICLE_JS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    
    files = re.findall(r'"file":\s*"([^"]+)"', content)
    
    missing = []
    for f in files:
        if not (ARTICLES_DIR / f).exists():
            missing.append(f)
    
    if missing:
        print(f"\n⚠️  以下 {len(missing)} 个 markdown 文件缺失:")
        for m in missing:
            print(f"   - {m}")
    else:
        print(f"✓ 所有 {len(files)} 个 markdown 文件均存在于 articles/ 目录")
    
    return missing

def main():
    print("=" * 60)
    print("文章内容检查工具 (fetch 模式)")
    print("=" * 60)
    print()
    print("⚠️  注意: 本脚本不再嵌入 markdown 内容到 JS。")
    print("   文章内容通过 fetch() 从 articles/ 目录动态加载。")
    print()
    
    # 1. 确保 article.js 中没有嵌入的 content
    remove_embedded_content()
    print()
    
    # 2. 检查 markdown 文件是否都存在
    print("🔍 检查 markdown 文件是否完整...")
    missing = check_markdown_files()
    print()
    
    # 3. 统计
    md_count = len(list(ARTICLES_DIR.glob("*.md")))
    print(f"📊 articles/ 目录中共有 {md_count} 个 markdown 文件")
    
    print()
    print("=" * 60)
    if not missing:
        print("✅ 一切正常！部署到 Cloudflare Pages 后文章将正常显示。")
    else:
        print(f"❌ 有 {len(missing)} 个文件缺失，请补充对应的 markdown 文件。")
    print("=" * 60)

if __name__ == "__main__":
    main()
