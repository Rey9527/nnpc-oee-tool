import { execFileSync } from 'node:child_process';
import { cpSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const siteUrl = 'https://www.nnpc.ai';
const production = process.env.VERCEL_ENV === 'production';
const output = 'dist';
const legacyPaths = [
  'about', 'admin', 'assets', 'cases', 'certificates', 'contact', 'industries',
  'solutions', 'tools', 'oee-calculator.html', 'privacy-policy.html', 'register.html',
  'terms.html', 'robots.txt',
];

execFileSync('npm', ['--prefix', 'website-v2', 'run', 'build'], {
  env: {
    ...process.env,
    SITE_URL: siteUrl,
    NNPC_COMBINED_SITE: '1',
    NNPC_PUBLIC_RELEASE: production ? '1' : '0',
  },
  stdio: 'inherit',
});

rmSync(output, { recursive: true, force: true });
cpSync('website-v2/dist', output, { recursive: true });
for (const path of legacyPaths) {
  cpSync(path, join(output, path), { recursive: true, force: path === 'robots.txt', errorOnExist: path !== 'robots.txt' });
}
cpSync('index.html', join(output, 'legacy-home.html'), { force: false, errorOnExist: true });

if (!production) {
  cpSync('website-v2/public/robots.txt', join(output, 'robots.txt'));
}

const locales = ['en', 'zh-tw', 'th'];
const localizedPages = readdirSync(output, { recursive: true })
  .filter(path => locales.includes(path.split('/')[0]) && path.endsWith('/index.html'))
  .map(path => `  <url><loc>${siteUrl}/${path.slice(0, -'index.html'.length)}</loc></url>`)
  .sort();
const sitemap = readFileSync('sitemap.xml', 'utf8')
  .replace(`  <url><loc>${siteUrl}/</loc></url>\n`, '')
  .replace('</urlset>', `${localizedPages.join('\n')}\n</urlset>`);
writeFileSync(join(output, 'sitemap.xml'), sitemap);
