/*
 * Cookie Consent Banner - GDPR Compliant
 * Integrated with Google Tag Manager (GTM)
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
    
    // Push consent event to dataLayer for GTM
    function pushConsentToGTM(consentType) {
        window.dataLayer = window.dataLayer || [];
        
        if (consentType === 'all') {
            // User accepted all cookies - grant consent
            window.dataLayer.push({
                'event': 'consent_accepted',
                'consent_analytics': 'granted',
                'consent_marketing': 'granted'
            });
            console.log('[Cookie Consent] Consent granted - GTM event pushed');
        } else {
            // User declined - deny non-essential cookies
            window.dataLayer.push({
                'event': 'consent_declined',
                'consent_analytics': 'denied',
                'consent_marketing': 'denied'
            });
            console.log('[Cookie Consent] Consent denied - only necessary cookies');
        }
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
        pushConsentToGTM('all');
    };
    
    // Decline non-essential cookies
    window.declineCookies = function() {
        setCookie(COOKIE_NAME, 'necessary', 365);
        hideBanner();
        pushConsentToGTM('necessary');
    };
    
    // Show settings (can be expanded with granular controls)
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
            // User previously accepted all - push consent to GTM
            pushConsentToGTM('all');
        } else {
            // User declined - push denied consent
            pushConsentToGTM('necessary');
        }
    }
    
    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
