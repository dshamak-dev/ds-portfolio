const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');

const PORT = process.env.PORT || 88;
const app = express();

const PUBLIC_FOLDER = "public";

const cacheTime = 60 * 60 * 24 * 365;
const robots = require('express-robots-txt');

// Compress all HTTP responses
app.use(compression());

app.use(cors({ origin: ['http://localhost:3003'] }));

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
