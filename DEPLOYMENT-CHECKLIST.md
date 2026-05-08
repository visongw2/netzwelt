# Blog 部署清单

## ✅ 部署后将会正常工作

1. **文章详情页 (article.html)**
   - `fetch()` 可以正常加载 `articles/*.md` 文件
   - Markdown 内容会被 `marked.js` 正确渲染
   - 所有 71 篇文章都可以访问

2. **首页 (index.html)**
   - JavaScript 可以正常加载 `js/articles.js` 和 `js/main.js`
   - 文章列表、轮播图都会正常显示

3. **分类页 (category.html)**
   - 分类筛选、文章列表都会正常工作

## 📋 部署前需要做的

### 1. 清理测试文件
删除这些测试/调试文件（不要部署到生产环境）：
- `99-test-article-self-contained.html`
- `99-test-article.html`
- `99-test-final.html`
- `99-TEST-SELF-CONTAINED.html`
- `article-fixed.html`
- `article-working.html`
- `debug-steps.html`
- `index-self-contained.html`
- `js-test.html`
- `test-render.html`
- `test.html`
- `embed_articles.py`
- `embed_articles_fixed.py`

### 2. 确保服务器配置
- 服务器需要能正确服务 `.md` 文件（设置 MIME 类型为 `text/plain` 或 `text/markdown`）
- 如果使用 Apache，在 `.htaccess` 中添加：
  ```
  AddType text/plain .md
  ```
- 如果使用 Nginx，在配置中添加：
  ```
  types {
      text/plain md;
  }
  ```

### 3. 更新 CDN 链接（可选）
当前 `article.html` 使用 `marked.js` 的 CDN 链接。如果服务器可能没有外网访问，可以下载 `marked.min.js` 到本地 `js/` 目录。

### 4. 测试部署
部署后，测试以下几个 URL：
- `http://yourdomain.com/blog/index.html` - 首页
- `http://yourdomain.com/blog/article.html?id=deutsche-telekom-kuendigt-neue-5g-initiative-an` - 文章详情
- `http://yourdomain.com/blog/category.html` - 分类页

## 🚀 快速部署步骤

1. 将 `blog/` 目录上传到服务器的 Web 根目录（例如 `/var/www/html/blog/` 或 `public_html/blog/`）

2. 确保服务器已启动并且可以通过域名访问

3. 访问 `http://yourdomain.com/blog/index.html` 测试

4. 点击任意文章，确认详情页能正常显示

## ⚠️ 唯一可能的问题

如果服务器配置了 **CORS 限制** 或 **MIME 类型不正确**，可能会导致 `fetch()` 失败。

如果遇到问题，可以在服务器配置中添加 CORS 头：
```
Access-Control-Allow-Origin: *
```

---

**总结：你的网站代码已经完全就绪，只要放到真实服务器上，所有功能都会正常工作！**
