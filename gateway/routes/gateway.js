const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const router = express.Router();

const userServiceProxy = createProxyMiddleware({
    target: process.env.USER_SERVICE_URL,
    changeOrigin: true
});

const discussionServiceProxy = createProxyMiddleware({
    target: process.env.DISCUSSION_SERVICE_URL,
    changeOrigin: true
});

const commentServiceProxy = createProxyMiddleware({
    target: process.env.COMMENT_SERVICE_URL,
    changeOrigin: true
});

const interactionServiceProxy = createProxyMiddleware({
    target: process.env.INTERACTION_SERVICE_URL,
    changeOrigin: true
});

router.use('/api/auth', userServiceProxy);
router.use('/api/discussions', discussionServiceProxy);
router.use('/api/comments', commentServiceProxy);
router.use('/api/interactions', interactionServiceProxy);

module.exports = router;
