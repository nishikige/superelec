// sitemap.js

import Generator from 'react-router-sitemap-generator';
import Router from './src/PageRoutes'; //import your react router component

const generator = new Generator(
  'https://superelec.party',
  Router(),
  {
    lastmod: new Date().toISOString().slice(0, 10),
    changefreq: 'monthly',
    priority: 0.8,
  }
);
generator.save('public/sitemap.xml');
