// Article Detail Page JavaScript
// Articles data (same structure as in main.js)
const articlesData = {
    "telekom": {
        "name": "Telekom & Netz",
        "subcategories": {
            "news": {
                "name": "Telekom Neuigkeiten",
                "articles": [
                    {
                        "id": "deutsche-telekom-kuendigt-neue-5g-initiative-an",
                        "title": "Deutsche Telekom kündigt neue 5G-Initiative an",
                        "date": "2026-02-01",
                        "excerpt": "Die Deutsche Telekom hat heute eine neue 5G-Initiative angekündigt, die Millionen von Kunden zugutekommen wird.",
                        "file": "deutsche-telekom-kuendigt-neue-5g-initiative-an.md"
                    },
                    {
                        "id": "telekom-berichtet-von-rekordjahr-2025",
                        "title": "Telekom berichtet von Rekordjahr 2025",
                        "date": "2025-05-23",
                        "excerpt": "Die Deutsche Telekom blickt auf ein erfolgreiches Geschäftsjahr 2025 zurück.",
                        "file": "telekom-berichtet-von-rekordjahr-2025.md"
                    },
                    {
                        "id": "telekom-startet-5g-netz-in-weiteren-staedten",
                        "title": "Telekom startet 5G-Netz in weiteren Städten",
                        "date": "2026-03-27",
                        "excerpt": "Die Deutsche Telekom hat den 5G-Ausbau in weiteren deutschen Städten gestartet.",
                        "file": "telekom-startet-5g-netz-in-weiteren-staedten.md"
                    },
                    {
                        "id": "telekom-testet-6g-technologie-in-deutschland",
                        "title": "Telekom testet 6G-Technologie in Deutschland",
                        "date": "2026-02-10",
                        "excerpt": "Die Deutsche Telekom hat begonnen, erste 6G-Technologien in Deutschland zu testen.",
                        "file": "telekom-testet-6g-technologie-in-deutschland.md"
                    }
                ]
            },
            "technology": {
                "name": "Netztechnologie",
                "articles": [
                    {
                        "id": "5g-netzwerk-optimierung-2026",
                        "title": "5G Netzwerk-Optimierung 2026: Praktische Tipps",
                        "date": "2026-05-08",
                        "excerpt": "2026年最新5G网络优化技巧，帮助您提升网络速度和稳定性。包含设置建议和故障排除。",
                        "file": "5g-netzwerk-optimierung-2026.md"
                    },
                    {
                        "id": "5g-sa-standalone-architektur-bei-telekom",
                        "title": "5G-SA: Standalone-Architektur bei Telekom",
                        "date": "2024-11-13",
                        "excerpt": "Die Deutsche Telekom rollt die 5G Standalone-Architektur bundesweit aus.",
                        "file": "5g-sa-standalone-architektur-bei-telekom.md"
                    },
                    {
                        "id": "carrier-aggregation-telekom-buendelt-frequenzen",
                        "title": "Carrier Aggregation: Telekom bündelt Frequenzen",
                        "date": "2025-06-27",
                        "excerpt": "Carrier Aggregation wird von der Telekom eingeführt, um die Datenraten zu erhöhen.",
                        "file": "carrier-aggregation-telekom-buendelt-frequenzen.md"
                    },
                    {
                        "id": "edge-computing-telekom-baut-rechenzentren-aus",
                        "title": "Edge Computing: Telekom baut Rechenzentren aus",
                        "date": "2025-10-06",
                        "excerpt": "Edge Computing wird von der Telekom für geringe Latenzzeiten genutzt.",
                        "file": "edge-computing-telekom-baut-rechenzentren-aus.md"
                    },
                    {
                        "id": "massive-mimo-telekom-setzt-auf-neue-antennentechni",
                        "title": "Massive MIMO: Telekom setzt auf neue Antennentechnik",
                        "date": "2025-04-18",
                        "excerpt": "Massive MIMO-Technologie wird von der Deutschen Telekom eingeführt.",
                        "file": "massive-mimo-telekom-setzt-auf-neue-antennentechni.md"
                    }
                ]
            },
            "tarife": {
                "name": "Tarife & Preise",
                "articles": [
                    {
                        "id": "magentamobil-tarif-familie-im-ueberblick",
                        "title": "MagentaMobil Tarif-Familie im Überblick",
                        "date": "2025-02-19",
                        "excerpt": "Alle MagentaMobil Tarife der Deutschen Telekom im detaillierten Überblick.",
                        "file": "magentamobil-tarif-familie-im-ueberblick.md"
                    },
                    {
                        "id": "telekom-senkt-preise-fuer-datentarife",
                        "title": "Telekom senkt Preise für Datentarife",
                        "date": "2026-04-30",
                        "excerpt": "Die Deutsche Telekom hat die Preise für ihre Datentarife gesenkt.",
                        "file": "telekom-senkt-preise-fuer-datentarife.md"
                    },
                    {
                        "id": "neue-familien-tarife-bei-telekom",
                        "title": "Neue Familien-Tarife bei Telekom",
                        "date": "2026-03-22",
                        "excerpt": "Die Deutsche Telekom führt neue Familien-Tarife mit attraktiven Konditionen ein.",
                        "file": "neue-familien-tarife-bei-telekom.md"
                    },
                    {
                        "id": "telekom-bietet-gratis-monat-fuer-neukunden",
                        "title": "Telekom bietet gratis Monat für Neukunden",
                        "date": "2026-01-27",
                        "excerpt": "Neukunden erhalten bei der Deutschen Telekom einen Monat gratis.",
                        "file": "telekom-bietet-gratis-monat-fuer-neukunden.md"
                    }
                ]
            }
        }
    },
    "mobilfunk": {
        "name": "Mobilfunk & SIM",
        "subcategories": {
            "sim-types": {
                "name": "SIM-Karten Typen",
                "articles": [
                    {
                        "id": "esim-komplettguide-2026",
                        "title": "eSIM komplettGuide 2026: Alles was Sie wissen müssen",
                        "date": "2026-05-08",
                        "excerpt": "eSIM komplettGuide 2026: Alles über eSIM-Technologie, Aktivierungsmethoden, Vergleich mit physischen SIMs und Zukunftstrends.",
                        "file": "esim-komplettguide-2026.md"
                    },
                    {
                        "id": "esim-so-aktivieren-sie-die-elektronische-sim-karte",
                        "title": "eSIM: So aktivieren Sie die elektronische SIM-Karte",
                        "date": "2026-02-05",
                        "excerpt": "Eine Schritt-für-Schritt-Anleitung zur Aktivierung einer eSIM.",
                        "file": "esim-so-aktivieren-sie-die-elektronische-sim-karte.md"
                    },
                    {
                        "id": "esim-vs-physikalische-sim",
                        "title": "eSIM vs. Physikalische SIM: Was ist besser?",
                        "date": "2025-03-10",
                        "excerpt": "Der große Vergleich zwischen moderner eSIM-Technologie und traditionellen SIM-Karten.",
                        "file": "esim-vs-physikalische-sim.md"
                    },
                    {
                        "id": "isim-vs-esim-was-ist-der-unterschied",
                        "title": "iSIM vs eSIM: Was ist der Unterschied?",
                        "date": "2026-01-22",
                        "excerpt": "iSIM und eSIM werden in diesem Artikel detailliert verglichen.",
                        "file": "isim-vs-esim-was-ist-der-unterschied.md"
                    }
                ]
            },
            "prepaid": {
                "name": "Prepaid & Verträge",
                "articles": [
                    {
                        "id": "die-besten-prepaid-tarife-2026",
                        "title": "Die besten Prepaid-Tarife 2026",
                        "date": "2026-02-21",
                        "excerpt": "Eine Übersicht der besten Prepaid-Tarife im Jahr 2026.",
                        "file": "die-besten-prepaid-tarife-2026.md"
                    },
                    {
                        "id": "prepaid-vs-postpaid-vor--und-nachteile",
                        "title": "Prepaid vs Postpaid: Vor- und Nachteile",
                        "date": "2024-05-14",
                        "excerpt": "Prepaid- und Postpaid-Tarife werden in diesem Artikel verglichen.",
                        "file": "prepaid-vs-postpaid-vor--und-nachteile.md"
                    },
                    {
                        "id": "eu-roaming-bei-prepaid-karten",
                        "title": "EU-Roaming bei Prepaid-Karten",
                        "date": "2025-03-13",
                        "excerpt": "EU-Roaming ist bei den meisten Prepaid-Karten inklusive.",
                        "file": "eu-roaming-bei-prepaid-karten.md"
                    }
                ]
            },
            "tips": {
                "name": "Nutzungstipps",
                "articles": [
                    {
                        "id": "datenvolumen-sparen-10-praktische-tipps",
                        "title": "Datenvolumen sparen: 10 praktische Tipps",
                        "date": "2026-04-14",
                        "excerpt": "Zehn praktische Tipps, um Datenvolumen zu sparen.",
                        "file": "datenvolumen-sparen-10-praktische-tipps.md"
                    },
                    {
                        "id": "datenschutz-auf-dem-smartphone",
                        "title": "Datenschutz auf dem Smartphone",
                        "date": "2026-04-20",
                        "excerpt": "Tipps zum Schutz der Privatsphäre auf dem Smartphone.",
                        "file": "datenschutz-auf-dem-smartphone.md"
                    }
                ]
            }
        }
    }
};

// ===== 以下是新增的渲染逻辑 =====

// 获取URL参数
function getUrlParameter(name) {
    var params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// 根据ID查找文章
function findArticleById(articleId) {
    for (var catKey in articlesData) {
        var category = articlesData[catKey];
        for (var subKey in category.subcategories) {
            var subcategory = category.subcategories[subKey];
            for (var i = 0; i < subcategory.articles.length; i++) {
                if (subcategory.articles[i].id === articleId) {
                    return {
                        article: subcategory.articles[i],
                        categoryKey: catKey,
                        subcategoryKey: subKey,
                        categoryName: category.name,
                        subcategoryName: subcategory.name
                    };
                }
            }
        }
    }
    return null;
}

// 获取所有文章
function getAllArticles() {
    var allArticles = [];
    for (var catKey in articlesData) {
        var category = articlesData[catKey];
        for (var subKey in category.subcategories) {
            var subcategory = category.subcategories[subKey];
            for (var i = 0; i < subcategory.articles.length; i++) {
                var article = subcategory.articles[i];
                allArticles.push({
                    article: article,
                    categoryKey: catKey,
                    subcategoryKey: subKey,
                    categoryName: category.name,
                    subcategoryName: subcategory.name
                });
            }
        }
    }
    return allArticles;
}

// 计算阅读时间
function calculateReadingTime(text) {
    var wordsPerMinute = 200;
    var words = text.trim().split(/\s+/).length;
    var minutes = Math.ceil(words / wordsPerMinute);
    return Math.max(minutes, 1);
}

// 生成标签
function generateTags(article, categoryName) {
    var tags = [];
    
    // 添加分类作为标签
    if (categoryName) {
        tags.push(categoryName);
    }
    
    // 根据文章ID添加相关标签
    var id = article.id.toLowerCase();
    if (id.includes('5g')) tags.push('5G');
    if (id.includes('esim')) tags.push('eSIM');
    if (id.includes('telekom')) tags.push('Telekom');
    if (id.includes('prepaid')) tags.push('Prepaid');
    if (id.includes('tarif')) tags.push('Tarife');
    if (id.includes('datenvolumen')) tags.push('Datenvolumen');
    if (id.includes('router') || id.includes('fritz')) tags.push('Router');
    if (id.includes('samsung') || id.includes('galaxy')) tags.push('Samsung');
    if (id.includes('iphone') || id.includes('apple')) tags.push('iPhone');
    if (id.includes('android')) tags.push('Android');
    if (id.includes('netz') || id.includes('mobilfunk')) tags.push('Mobilfunk');
    if (id.includes('glassfaser')) tags.push('Glasfaser');
    if (id.includes('hotspot')) tags.push('Hotspot');
    if (id.includes('roaming')) tags.push('Roaming');
    
    // 如果没有生成足够标签，添加一些通用标签
    if (tags.length < 3) {
        tags.push('Mobilfunk');
        tags.push('Telekommunikation');
    }
    
    return tags;
}

// 加载并渲染文章
async function loadArticle() {
    var articleId = getUrlParameter('id');
    
    if (!articleId) {
        showError('Keine Artikel-ID in der URL gefunden.');
        return;
    }
    
    // 更新页面标题
    document.title = 'Artikel - NetzWelt';
    
    // 使用搜索功能加载文章
    await loadArticleWithSearch(articleId);
}

// 渲染文章头部（标题、日期、图片等）
function renderArticleHeader(article, categoryName, subcategoryName) {
    var container = document.getElementById('articleContent');
    if (!container) {
        console.error('articleContent container not found');
        return;
    }
    
    var headerHtml = '';
    headerHtml += '<div class="article-header">';
    headerHtml += '<span class="category-badge">' + categoryName + ' / ' + subcategoryName + '</span>';
    headerHtml += '<h1>' + article.title + '</h1>';
    headerHtml += '<div class="article-meta">';
    headerHtml += '<span class="date"><i class="fas fa-calendar-alt"></i> ' + article.date + '</span>';
    headerHtml += '<span class="reading-time"><i class="fas fa-clock"></i> <span id="readingTime">...</span> Min. Lesezeit</span>';
    headerHtml += '</div>';
    headerHtml += '</div>';
    
    if (article.image) {
        headerHtml += '<div class="article-featured-image">';
        headerHtml += '<img src="' + article.image + '" alt="' + article.title + '" loading="lazy">';
        headerHtml += '</div>';
    }
    
    headerHtml += '<div class="article-body" id="articleBody">';
    headerHtml += '<p class="article-excerpt">' + article.excerpt + '</p>';
    headerHtml += '<div class="article-content markdown-body">Lade Inhalt...</div>';
    headerHtml += '</div>';
    
    container.innerHTML = headerHtml;
    
    // 计算并显示阅读时间
    if (article.content) {
        var readingTime = calculateReadingTime(article.content);
        document.getElementById('readingTime').textContent = readingTime;
    } else {
        // 估算阅读时间（基于摘要）
        var readingTime = calculateReadingTime(article.excerpt + ' '.repeat(50));
        document.getElementById('readingTime').textContent = readingTime;
    }
}

// 渲染文章侧边栏
function renderArticleSidebar(article, categoryKey, subcategoryKey, categoryName, subcategoryName) {
    // 更新侧边栏信息 - 直接传入分类名称，避免依赖DOM元素
    var sidebarDate = document.getElementById('sidebarDate');
    var sidebarCategory = document.getElementById('sidebarCategory');
    var sidebarReadingTime = document.getElementById('sidebarReadingTime');
    
    if (sidebarDate) sidebarDate.textContent = article.date || '-';
    if (sidebarCategory) sidebarCategory.textContent = categoryName || '-';
    if (sidebarReadingTime) {
        var readingTime = document.getElementById('readingTime')?.textContent || '5';
        sidebarReadingTime.textContent = readingTime + ' Min. Lesezeit';
    }
    
    // 加载相关文章
    loadRelatedArticles(article.id, categoryKey, subcategoryKey);
    
    // 加载热门文章
    loadPopularArticles();
    
    // 生成标签
    generateAndRenderTags(article, categoryName || '');
}

// 加载相关文章
function loadRelatedArticles(currentArticleId, categoryKey, subcategoryKey) {
    var container = document.getElementById('relatedArticles');
    if (!container) return;
    
    var related = [];
    
    // 获取同子分类的文章
    if (articlesData[categoryKey] && 
        articlesData[categoryKey].subcategories[subcategoryKey]) {
        var articles = articlesData[categoryKey].subcategories[subcategoryKey].articles;
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id !== currentArticleId) {
                related.push(articles[i]);
            }
        }
    }
    
    // 如果相关文章不足，从同分类其他子分类补充
    if (related.length < 5 && articlesData[categoryKey]) {
        for (var subKey in articlesData[categoryKey].subcategories) {
            if (subKey !== subcategoryKey) {
                var articles = articlesData[categoryKey].subcategories[subKey].articles;
                for (var i = 0; i < articles.length && related.length < 5; i++) {
                    if (articles[i].id !== currentArticleId && 
                        !related.find(r => r.id === articles[i].id)) {
                        related.push(articles[i]);
                    }
                }
            }
        }
    }
    
    // 渲染相关文章
    var html = '';
    for (var i = 0; i < Math.min(related.length, 5); i++) {
        html += '<div class="related-item">';
        html += '<a href="article.html?id=' + related[i].id + '">' + related[i].title + '</a>';
        html += '<div class="related-date"><i class="fas fa-calendar-alt"></i> ' + related[i].date + '</div>';
        html += '</div>';
    }
    
    container.innerHTML = html || '<p style="color: #666; font-size: 0.9rem;">Keine weiteren Artikel gefunden.</p>';
}

// 加载热门文章
function loadPopularArticles() {
    var container = document.getElementById('popularArticles');
    if (!container) return;
    
    // 获取所有文章并随机选取（实际应用中应基于浏览量）
    var allArticles = getAllArticles();
    var shuffled = allArticles.sort(function() { return 0.5 - Math.random(); });
    var popular = shuffled.slice(0, 5);
    
    var html = '';
    for (var i = 0; i < popular.length; i++) {
        html += '<div class="popular-item">';
        html += '<span class="popular-number">' + (i + 1) + '</span>';
        html += '<a href="article.html?id=' + popular[i].article.id + '">' + popular[i].article.title + '</a>';
        html += '</div>';
    }
    
    container.innerHTML = html;
}

// 生成并渲染标签
function generateAndRenderTags(article, categoryName) {
    var container = document.getElementById('tagCloud');
    if (!container) return;
    
    var tags = generateTags(article, categoryName);
    
    var html = '';
    for (var i = 0; i < tags.length; i++) {
        html += '<a href="category.html?cat=telekom" class="tag">' + tags[i] + '</a>';
    }
    
    container.innerHTML = html;
}

// 分享文章
function shareArticle(platform) {
    var url = encodeURIComponent(window.location.href);
    var title = encodeURIComponent(document.title);
    var shareUrl = '';
    
    switch(platform) {
        case 'twitter':
            shareUrl = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + title;
            break;
        case 'facebook':
            shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
            break;
        case 'linkedin':
            shareUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
            break;
        case 'whatsapp':
            shareUrl = 'https://wa.me/?text=' + title + '%20' + url;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// 复制链接
function copyLink() {
    var url = window.location.href;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function() {
            alert('Link wurde in die Zwischenablage kopiert!');
        });
    } else {
        // Fallback
        var input = document.createElement('input');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        alert('Link wurde in die Zwischenablage kopiert!');
    }
}

// 加载Markdown内容（优先使用内嵌内容，无需fetch）
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
}

// 使用marked.js渲染Markdown
function renderMarkdown(markdownText) {
    var contentDiv = document.querySelector('#articleBody .markdown-body');
    if (!contentDiv) {
        console.error('Markdown content container not found');
        return;
    }
    
    if (typeof marked !== 'undefined') {
        contentDiv.innerHTML = marked.parse(markdownText);
    } else {
        // 如果marked.js未加载，显示原始markdown
        contentDiv.innerHTML = '<pre>' + escapeHtml(markdownText) + '</pre>';
        console.warn('marked.js not loaded, showing raw markdown');
    }
}

// 提交评论
function submitComment(event) {
    event.preventDefault();
    
    var name = document.getElementById('commentName').value;
    var email = document.getElementById('commentEmail').value;
    var commentText = document.getElementById('commentText').value;
    var saveInfo = document.getElementById('saveInfo').checked;
    
    if (!name || !email || !commentText) {
        alert('Bitte füllen Sie alle Pflichtfelder aus.');
        return false;
    }
    
    // 保存用户信息（如果勾选）
    if (saveInfo) {
        localStorage.setItem('commentName', name);
        localStorage.setItem('commentEmail', email);
    }
    
    // 创建新评论（Demo模式，不会真正保存）
    var newComment = document.createElement('div');
    newComment.className = 'comment-item';
    newComment.innerHTML = `
        <div class="comment-avatar">
            <i class="fas fa-user-circle"></i>
        </div>
        <div class="comment-content">
            <div class="comment-header">
                <span class="comment-author">${escapeHtml(name)}</span>
                <span class="comment-date">Gerade eben</span>
            </div>
            <p class="comment-text">${escapeHtml(commentText)}</p>
            <div class="comment-actions">
                <a href="#" onclick="replyToComment('${escapeHtml(name)}'); return false;"><i class="fas fa-reply"></i> Antworten</a>
            </div>
        </div>
    `;
    
    // 添加到评论列表顶部
    var commentsList = document.getElementById('commentsList');
    if (commentsList) {
        commentsList.insertBefore(newComment, commentsList.firstChild);
    }
    
    // 更新评论数
    var commentCount = document.getElementById('commentCount');
    if (commentCount) {
        var count = parseInt(commentCount.textContent) + 1;
        commentCount.textContent = count;
    }
    
    // 清空表单
    document.getElementById('commentForm').reset();
    
    // 显示成功消息
    alert('Vielen Dank für Ihren Kommentar! Er wird vor der Veröffentlichung geprüft.');
    
    return false;
}

// 回复评论
function replyToComment(authorName) {
    var commentText = document.getElementById('commentText');
    if (commentText) {
        commentText.value = '@' + authorName + ' ';
        commentText.focus();
        document.querySelector('.comment-form-container').scrollIntoView({ behavior: 'smooth' });
    }
}

// 动态更新 Meta Description
function updateMetaDescription(description) {
    if (!description) return;
    
    // 移除现有的 meta description 标签
    var existingMeta = document.querySelector('meta[name="description"]');
    if (existingMeta) {
        existingMeta.setAttribute('content', description);
    } else {
        // 创建新的 meta description 标签
        var meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
    }
    
    // 同时更新 Open Graph 和 Twitter Card 的 description
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
        ogDesc.setAttribute('content', description);
    }
    
    var twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
        twitterDesc.setAttribute('content', description);
    }
}

// 转义HTML特殊字符
function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 显示错误信息
function showError(message) {
    var container = document.getElementById('articleContent');
    if (container) {
        container.innerHTML = '<div class="error-message"><h2>Fehler</h2><p>' + message + '</p>' +
            '<p><a href="index.html">← Zurück zur Startseite</a></p></div>';
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    loadArticle();
    
    // 加载保存的用户信息
    var savedName = localStorage.getItem('commentName');
    var savedEmail = localStorage.getItem('commentEmail');
    if (savedName) document.getElementById('commentName').value = savedName;
    if (savedEmail) document.getElementById('commentEmail').value = savedEmail;
    if (savedName && savedEmail) document.getElementById('saveInfo').checked = true;
});

// ===== 文章搜索功能 =====
var articleCache = {}; // 缓存已加载的文章

// 从文件名推断分类
function inferCategoryFromFile(fileName) {
    var name = fileName.toLowerCase();
    if (name.includes('telekom') || name.includes('magenta') || 
        name.includes('vodafone') || name.includes('o2')) {
        return { cat: 'telekom', catName: 'Telekom & Netz' };
    }
    return { cat: 'mobilfunk', catName: 'Mobilfunk & SIM' };
}

// 从文件名推断子分类
function inferSubcategoryFromFile(fileName) {
    var name = fileName.toLowerCase();
    if (name.includes('news') || name.includes('meldung')) {
        return { sub: 'news', subName: 'Telekom Neuigkeiten' };
    }
    if (name.includes('tech') || name.includes('5g') || name.includes('netz') ||
        name.includes('glasfaser') || name.includes('antenne') || name.includes('latenz') ||
        name.includes('frequenz') || name.includes('router')) {
        return { sub: 'technology', subName: 'Netztechnologie' };
    }
    if (name.includes('tarif') || name.includes('preis') || name.includes('angebot') ||
        name.includes('magentaeins') || name.includes('mobil') || name.includes('vertrag')) {
        return { sub: 'tarife', subName: 'Tarife & Preise' };
    }
    if (name.includes('sim') || name.includes('esim') || name.includes('isim') ||
        name.includes('dual') || name.includes('multi-sim') || name.includes('nano') ||
        name.includes('portier')) {
        return { sub: 'sim-types', subName: 'SIM-Karten Typen' };
    }
    if (name.includes('prepaid') || name.includes('postpaid') || name.includes('auflad')) {
        return { sub: 'prepaid', subName: 'Prepaid & Verträge' };
    }
    if (name.includes('tipp') || name.includes('spare') || name.includes('datenschutz') ||
        name.includes('roaming') || name.includes('wlan') || name.includes('akku') ||
        name.includes('hotspot') || name.includes('mobilfunk-empfang') || name.includes('speicher')) {
        return { sub: 'tips', subName: 'Nutzungstipps' };
    }
    return { sub: 'news', subName: 'Telekom Neuigkeiten' };
}

// 从Markdown文件内容提取元数据
function extractMetadata(markdownText, fileName) {
    var lines = markdownText.split('\n');
    var metadata = {
        title: '',
        date: '',
        category: '',
        subcategory: '',
        subcategoryName: ''
    };
    
    // 从Markdown标题提取标题（第一个#开头的行）
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (line.startsWith('# ')) {
            metadata.title = line.substring(2).trim();
            break;
        }
    }
    
    // 从文件名推断分类
    var catInfo = inferCategoryFromFile(fileName);
    var subInfo = inferSubcategoryFromFile(fileName);
    metadata.category = catInfo.cat;
    metadata.categoryName = catInfo.catName;
    metadata.subcategory = subInfo.sub;
    metadata.subcategoryName = subInfo.subName;
    
    // 从文件名提取日期（尝试从文件名中提取或使用默认值）
    var dateMatch = fileName.match(/(\d{4})-(\d{2})-(\d{2})/);
    if (dateMatch) {
        metadata.date = dateMatch[1] + '-' + dateMatch[2] + '-' + dateMatch[3];
    } else {
        metadata.date = '2026-01-01';
    }
    
    return metadata;
}

// 搜索文章（通过遍历所有已缓存的文章或加载文件）
async function searchArticles(query) {
    // 首先在已缓存的文章中查找
    for (var id in articleCache) {
        var article = articleCache[id];
        if (article.title.toLowerCase().includes(query.toLowerCase()) ||
            article.id.toLowerCase().includes(query.toLowerCase())) {
            return article;
        }
    }
    return null;
}

// 获取文章文件列表（从URL参数推断，或使用已知列表）
function getArticleFileName(articleId) {
    // 如果articlesData中有记录，使用记录的文件名
    var result = findArticleById(articleId);
    if (result) {
        return 'articles/' + result.article.file;
    }
    
    // 否则使用ID作为文件名
    return 'articles/' + articleId + '.md';
}

// 加载文章内容（带搜索备用方案）
async function loadArticleWithSearch(articleId) {
    var result = findArticleById(articleId);
    
    if (result) {
        // 在articlesData中找到，使用原有逻辑
        loadArticleContent(result.article, result.categoryName, result.subcategoryName, result.categoryKey, result.subcategoryKey);
        return;
    }
    
    // 未找到，尝试从文件加载
    var fileName = articleId + '.md';
    var markdownPath = 'articles/' + fileName;
    
    try {
        var response = await fetch(markdownPath);
        if (!response.ok) {
            showError('Artikel mit ID "' + articleId + '" nicht gefunden.');
            return;
        }
        
        var markdownText = await response.text();
        var metadata = extractMetadata(markdownText, fileName);
        var article = {
            id: articleId,
            title: metadata.title || articleId,
            date: metadata.date,
            file: fileName,
            excerpt: metadata.title || articleId
        };
        
        // 缓存文章
        articleCache[articleId] = article;
        
        loadArticleContent(article, metadata.categoryName, metadata.subcategoryName, metadata.category, metadata.subcategory);
        renderMarkdownWithId(markdownText);
        
    } catch (error) {
        showError('Artikel mit ID "' + articleId + '" nicht gefunden.');
    }
}

// 加载文章内容
function loadArticleContent(article, categoryName, subcategoryName, categoryKey, subcategoryKey) {
    renderArticleHeader(article, categoryName, subcategoryName);
    renderArticleSidebar(article, categoryKey, subcategoryKey, categoryName, subcategoryName);
    loadMarkdownContent(article);
    
    // 动态更新 Meta Description
    updateMetaDescription(article.excerpt);
}

// 渲染Markdown（用于搜索到的文章）
function renderMarkdownWithId(markdownText) {
    var contentDiv = document.querySelector('#articleBody .markdown-body');
    if (!contentDiv) return;
    
    if (typeof marked !== 'undefined') {
        contentDiv.innerHTML = marked.parse(markdownText);
    } else {
        contentDiv.innerHTML = '<pre>' + escapeHtml(markdownText) + '</pre>';
    }
}


