/*
 * Cookie Consent Banner - GDPR Compliant
 * German language
 */

(function() {
    'use strict';

    // Cookie name
    const COOKIE_NAME = 'netzpul_cookie_consent';
    
    // Get cookie value
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }
    
    // Set cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
    }
    
    // Load Google Analytics (only after consent)
    function loadGA() {
        const GA_ID = 'G-D5M0SGMDNQ';
        
        // Load gtag.js
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        document.head.appendChild(script);
        
        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', GA_ID);
        
        console.log('[Cookie Consent] Google Analytics loaded');
    }
    
    // Show cookie banner
    function showBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.style.display = 'block';
        }
    }
    
    // Hide cookie banner
    function hideBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.style.display = 'none';
        }
    }
    
    // Accept all cookies
    window.acceptCookies = function() {
        setCookie(COOKIE_NAME, 'all', 365);
        hideBanner();
        loadGA();
        console.log('[Cookie Consent] All cookies accepted');
    };
    
    // Decline non-essential cookies
    window.declineCookies = function() {
        setCookie(COOKIE_NAME, 'necessary', 365);
        hideBanner();
        console.log('[Cookie Consent] Only necessary cookies accepted');
    };
    
    // Show settings (placeholder - can be expanded)
    window.showCookieSettings = function() {
        alert('Cookie-Einstellungen: \n\n✅ Notwendige Cookies: Immer aktiv\n❌ Analyse-Cookies (Google Analytics): Deaktiviert\n\nHinweis: Um alle Cookies zu akzeptieren, klicken Sie auf "Alle akzeptieren".');
    };
    
    // Initialize on page load
    function init() {
        const consent = getCookie(COOKIE_NAME);
        
        if (!consent) {
            // No consent given - show banner
            showBanner();
        } else if (consent === 'all') {
            // User accepted all - load GA
            loadGA();
        } else {
            // User declined - only necessary cookies
            console.log('[Cookie Consent] Only necessary cookies enabled');
        }
    }
    
    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
