import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
const read = p => readFileSync(new URL('../'+p,import.meta.url),'utf8');
const locales = [
 ['en','en','Engineering Services','Illustrative engineering scene',['3 sites','4 sites','1 site','1 site','2 sites']],
 ['zh-tw','zh-Hant','工程服務','工程情境示意',['3 處案場','4 處案場','1 處案場','1 處案場','2 處案場']],
 ['th','th','บริการด้านวิศวกรรม','ภาพประกอบงานวิศวกรรม',['3 แห่ง','4 แห่ง','1 แห่ง','1 แห่ง','2 แห่ง']],
];
for(const [route,lang,serviceHeading,imageLabel,siteLabels] of locales) {
 test(route+': generated page, language metadata and valid internal links',()=>{
  const html=read('dist/'+route+'/index.html');
  assert.ok(html.includes('lang="'+lang+'"'));
  assert.match(html,/<link[^>]+rel="canonical"[^>]+href="http:\/\/localhost:4321\//);
  for(const [,language] of locales) assert.ok(html.includes('hreflang="'+language+'"'));
  assert.match(html,/name="robots" content="noindex,nofollow"/);
  assert.equal((html.match(/<h1[ >]/g)||[]).length,1);
  const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
  for(const [,anchor] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(anchor),'missing anchor: '+anchor);
  const servicesGrid = html.match(/<div class="services-grid">([\s\S]*?)<\/div>/)?.[1] ?? '';
  assert.equal((servicesGrid.match(/class="service-card"/g)||[]).length,8);
  const scenarioGrid = html.match(/<ul class="scenario-grid"[^>]*>([\s\S]*?)<\/ul>/)?.[1] ?? '';
  assert.deepEqual([...scenarioGrid.matchAll(/href="([^"]+)"/g)].map(([,href]) => href),
   ['new-construction', 'factory-expansion', 'renovation', 'modernization', 'energy-smart', 'maintenance']
    .map(id => `/${route}/work/?scenario=${id}`));
  assert.match(html, new RegExp(`class="text-link assessment-link" href="/${route}/work/"`));
  assert.ok(html.includes(`href="/${route}/engineering/"`));
  assert.ok(html.includes(`href="/${route}/engineering/cctv-surveillance/"`));
  const solutionList = html.match(/<div class="solution-list">([\s\S]*?)<a class="text-link solutions-all"/)?.[1] ?? '';
  assert.deepEqual([...solutionList.matchAll(/<a href="([^"]+)"/g)].map(([,href]) => href),
   ['iiot', 'mes-mom', 'wms', 'intag', 'enterprise-ai'].map(slug => `/${route}/solutions/${slug}/`));
  assert.ok(html.includes(`class="text-link solutions-all" href="/${route}/solutions/"`));
  assert.ok(html.includes(`<h2>${serviceHeading}</h2>`));
  assert.equal((html.match(new RegExp(imageLabel, 'g')) || []).length, 3);
  assert.doesNotMatch(html, /<main[^>]+lang="en"/);
  assert.ok(html.includes('href="mailto:rey@nnpc.ai"'));
  assert.ok(html.includes('href="https://line.me/R/ti/p/%40nnpc"'));
  const provinceLabels = [...html.matchAll(/data-province="([^"]+)">.*?<strong>([^<]+)<\/strong>/g)];
  assert.deepEqual(provinceLabels.map(([, province]) => province), [
   'samut-prakan', 'chon-buri', 'rayong', 'chachoengsao', 'pathum-thani',
  ]);
  assert.deepEqual(provinceLabels.map(([, , label]) => label), siteLabels);
  assert.ok(!html.includes('<form'),'no unapproved enquiry backend');
  assert.ok(!html.includes('homepage-desktop-reference.png'),'mockups are not production images');
  for(const [,path] of html.matchAll(/(?:src|href)="(\/[^"#?]*)"/g)) {
   if(path.startsWith('//'))continue;
   assert.ok(existsSync(new URL('../dist'+path+(path.endsWith('/')?'index.html':''),import.meta.url)), 'missing local asset or route: '+path);
  }
 });
}
test('approved source image retained byte-for-byte in build',()=>{
 assert.deepEqual(readFileSync(new URL('../public/images/home/home-hero-desktop.png',import.meta.url)),readFileSync(new URL('../dist/images/home/home-hero-desktop.png',import.meta.url)));
});
test('references remain documentation-only and root entry exists',()=>{
 assert.ok(existsSync(new URL('../dist/index.html',import.meta.url)));
 assert.ok(!existsSync(new URL('../dist/docs/design',import.meta.url)));
});
