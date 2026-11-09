import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { existsSync } from 'node:fs';

const languages = { en: 'en', 'zh-tw': 'zh-Hant', th: 'th' };
const overview = 'engineering/';
const cctv = 'engineering/cctv-surveillance/';
const solutions = ['iiot', 'mes-mom', 'wms', 'intag', 'enterprise-ai'];
const serviceSlugs = [
  'access-control', 'lan-fiber', 'wi-fi-network', 'server-room',
  'environmental-monitoring-ahu', 'maintenance-support',
];
const routes = [
  [overview, ['services', 'partners', 'process', 'deliverables', 'maintenance']],
  [cctv, ['coverage', 'system', 'scope', 'installation', 'acceptance', 'maintenance']],
  ...serviceSlugs.map(slug => [`engineering/${slug}/`, ['scope', 'acceptance', 'maintenance', 'quotation']]),
  ['solutions/', solutions],
  ...solutions.map(slug => [`solutions/${slug}/`, ['example', ...(slug === 'intag' ? ['applications'] : []), 'use-cases', 'workflow', 'scope', 'acceptance']]),
  ['industries/', ['facilities']],
  ['work/', ['scenarios', 'review-points']],
  ['about/', ['responsibilities']],
  ['contact/', ['enquiry']],
];
const readPage = path => readFileSync(new URL(`../dist${path}index.html`, import.meta.url), 'utf8');

for (const [locale, lang] of Object.entries(languages)) {
  test(`${locale}: full site routes, locale switches and CTA destinations`, () => {
    const home = readPage(`/${locale}/`);
    const titles = new Set([home.match(/<title>([^<]+)<\/title>/)?.[1]]);
    const serviceImages = new Set();
    for (const [page, sections] of routes) {
      const path = `/${locale}/${page}`;
      const html = readPage(path);
      const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
      assert.ok(title && !titles.has(title), `distinct title for ${path}`);
      titles.add(title);
      assert.ok(html.includes(`<html lang="${lang}"`));
      assert.match(html, /name="description" content="[^"]+"/);
      assert.match(html, /name="robots" content="noindex,nofollow"/);
      assert.ok(html.includes(`rel="canonical" href="http://localhost:4321${path}"`));
      assert.ok(html.includes(`hreflang="x-default" href="http://localhost:4321/en/${page}"`));
      assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1);
      for (const [otherLocale, otherLang] of Object.entries(languages)) {
        assert.ok(html.includes(`hreflang="${otherLang}" href="http://localhost:4321/${otherLocale}/${page}"`));
        assert.ok(html.includes(`href="/${otherLocale}/${page}" lang="${otherLang}"`));
      }
      for (const id of [...sections, 'contact']) assert.ok(html.includes(`id="${id}"`), `${path} missing #${id}`);
      assert.ok(html.includes('href="mailto:rey@nnpc.ai"'));
      assert.ok(html.includes('href="https://line.me/R/ti/p/%40nnpc"'));
      if (page.startsWith(overview)) {
        const source = html.match(/class="engineering-illustration"><img src="([^"]+)"/)?.[1];
        assert.ok(source && existsSync(new URL(`../dist${source}`, import.meta.url)), `missing engineering image on ${path}`);
        assert.ok(!serviceImages.has(source), `duplicate engineering image on ${path}`);
        serviceImages.add(source);
      }
      if (page === 'solutions/') {
        for (const slug of solutions) assert.ok(html.includes(`href="/${locale}/solutions/${slug}/"`));
      }
      if (page === 'solutions/intag/') {
        for (const module of ['Dynamic Dispatch', 'GEO Fencing', 'ESG Enhance Analytics']) assert.ok(html.includes(module));
      }
      if (page === overview) {
        assert.equal((html.match(/class="service-card"/g) ?? []).length, 8);
        assert.deepEqual(
          new Set([...html.matchAll(/<a class="service-card" href="([^"]+)"/g)].map(([, href]) => href)),
          new Set([cctv, ...serviceSlugs.map(slug => `engineering/${slug}/`)].map(service => `/${locale}/${service}`)),
        );
      } else if (page === cctv) {
        assert.ok(html.includes(`href="/${locale}/${overview}"`));
        for (const term of ['PoE', 'NVR']) assert.ok(html.includes(term));
      }
    }
    for (const page of ['', ...routes.map(([page]) => page)]) {
      const path = `/${locale}/${page}`;
      const html = page ? readPage(path) : home;
      for (const [, route, fragment] of html.matchAll(/href="((?:\/[^#"]*\/)?)(?:#([^"]+))?"/g)) {
        if (!route && !fragment) continue;
        const target = route ? readPage(route) : html;
        if (fragment) assert.ok(target.includes(`id="${fragment}"`), `broken link ${route}#${fragment} on ${path}`);
      }
    }
  });
}
