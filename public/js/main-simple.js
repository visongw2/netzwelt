// Simple test JavaScript file
console.log('main-simple.js loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    var test2 = document.getElementById('test2');
    if (test2) {
        test2.innerHTML = '<p style="color:green;">✓ External JavaScript is working!</p>';
    }
    
    // Test article data
    var testArticles = [
        { id: 'test-1', title: 'Test Article 1', date: '2026-01-01', excerpt: 'Test excerpt 1', image: 'https://picsum.photos/400/300?random=1' },
        { id: 'test-2', title: 'Test Article 2', date: '2026-01-02', excerpt: 'Test excerpt 2', image: 'https://picsum.photos/400/300?random=2' }
    ];
    
    var test3 = document.getElementById('test3');
    if (test3) {
        var html = '<p>Found ' + testArticles.length + ' test articles:</p>';
        for (var i = 0; i < testArticles.length; i++) {
            html += '<div style="border:1px solid #ccc; padding:10px; margin:10px 0;">';
            html += '<h3>' + testArticles[i].title + '</h3>';
            html += '<p>' + testArticles[i].excerpt + '</p>';
            html += '</div>';
        }
        test3.innerHTML = html;
    }
});
