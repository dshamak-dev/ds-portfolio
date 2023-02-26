const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');

const PORT = process.env.PORT || 80;
const app = express();

const PUBLIC_FOLDER = path.resolve(__dirname, '../public');

const cacheTime = 86400000 * 30; // the time you want
const robots = require('express-robots-txt');

// Compress all HTTP responses
app.use(compression());

app.use(robots({
  UserAgent: '*',
  Disallow: '/',
  CrawlDelay: '5',
  Sitemap: 'https://dshamak.com',
}));

app.use(express.static(PUBLIC_FOLDER, {
  maxAge: cacheTime,
}));

app.use(bodyParser.json());

const rootFilePath = path.join(__dirname, `/${PUBLIC_FOLDER}/index.html`);

app.get('/health', (req, res) => {
  res.status(200).send(true);
});

app.get('*', (req, res) => {
  res.set("Cache-Control", `public, max-age=${cacheTime}`);
  res.sendFile(rootFilePath);
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
