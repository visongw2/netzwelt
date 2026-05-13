// Cloudflare Workers with Static Assets
// This worker serves static files from the ASSETS binding

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    
    // Try to serve static assets first
    try {
      const assetResponse = await env.ASSETS.fetch(request);
      if (assetResponse.status !== 404) {
        return assetResponse;
      }
    } catch (e) {
      // Asset not found, continue to fallback
    }
    
    // Fallback: return index.html for SPA routing
    return env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request));
  }
};
