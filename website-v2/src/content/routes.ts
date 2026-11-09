import type { Locale } from './home';
import type { navigationIds } from './home-copy';

export const engineeringPath = 'engineering/';
export const cctvPath = 'engineering/cctv-surveillance/';
export const mainPages = ['solutions', 'industries', 'work', 'about', 'contact'] as const;
export type MainPage = typeof mainPages[number];
export type PagePath = '' | `${typeof navigationIds[number]}/` | `engineering/${string}/` | `solutions/${string}/`;

export function solutionPath(slug: string): `solutions/${string}/` {
  return `solutions/${slug}/`;
}

// Match the eight service cards in home-copy.ts. Monitoring and AHU share a page.
export const engineeringServices = [
  'cctv-surveillance', 'access-control', 'lan-fiber', 'wi-fi-network', 'server-room',
  'environmental-monitoring-ahu', 'environmental-monitoring-ahu', 'maintenance-support',
] as const;
export type AdditionalService = Exclude<typeof engineeringServices[number], 'cctv-surveillance'>;
export const additionalServices = [...new Set(engineeringServices)]
  .filter((slug): slug is AdditionalService => slug !== 'cctv-surveillance');

export function servicePath(slug: typeof engineeringServices[number]): `engineering/${string}/` {
  return `engineering/${slug}/`;
}

export function localizedPath(locale: Locale, page: PagePath = '') {
  return `/${locale}/${page}`;
}

export function navigationHref(locale: Locale, page: PagePath, section: typeof navigationIds[number]) {
  if (page === 'contact/' && section === 'contact') return '#contact';
  return localizedPath(locale, `${section}/`);
}
