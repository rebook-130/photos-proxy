const express = require('express');
const app = express();
const port=   3000;
const { createProxyMiddleware } = require('http-proxy-middleware')

app.use('/rooms/:roomId', express.static(`${__dirname}/../public`));

app.listen( port, () => {
  console.log(`server running at http://localhost:${port}`)
})

// Photo-gallery
app.use('/api/photogallery/:roomId', createProxyMiddleware({ target: `http://photo-gallery-service:3001/`, changeOrigin: true }));

// Calender
app.use('/api/calendar', createProxyMiddleware({ target: `http://calendar-service:3002`, changeOrigin: true }));

// Reviews
app.use('/api/rooms/:roomId', createProxyMiddleware({ target: `http://review-service:3003`, changeOrigin: true }));

// More Places to Stay
app.use('/api/more_places', createProxyMiddleware({ target: `http://more-places-to-stay-service:3004/`, changeOrigin: true}));
app.use('/api/saved_lists', createProxyMiddleware({ target: `http://more-places-to-stay-service:3004/`, changeOrigin: true}));
app.use('/api/create_list', createProxyMiddleware({ target: `http://more-places-to-stay-service:3004/`, changeOrigin: true}));
app.use('/api/update_listing', createProxyMiddleware({ target: `http://more-places-to-stay-service:3004/`, changeOrigin: true}));
app.use('/api/update_collection', createProxyMiddleware({ target: `http://more-places-to-stay-service:3004/`, changeOrigin: true}));
app.use('/api/collection_name', createProxyMiddleware({ target: `http://more-places-to-stay-service:3004/`, changeOrigin: true}));
