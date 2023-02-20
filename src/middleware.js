export function preventIframeEmbedding(req, res, next) {
    res.setHeader('X-Frame-Options', 'sameorigin');
    next();
}