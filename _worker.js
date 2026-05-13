// Cloudflare Workers Static Assets Handler
// This worker serves static files from the ASSETS binding

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    
    // Try to serve static assets first
    try {
      const response = await env.ASSETS.fetch(request);
      if (response.status !== 404) {
        return response;
      }
    } catch (e) {
      // Asset not found, continue to fallback
    }
    
    // Fallback: return index.html for SPA routing
    return env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request));
  }
};
