# N/NPC Website V2

The Astro site renders the company homepage and localized English, Traditional Chinese and Thai pages. Use Node 24 to match the Vercel project.

```sh
npm ci
npm run dev
npm run verify
```

Open http://localhost:4321/en/. The verification gate runs Astro checks, the static build and generated-page tests.

The [release runbook](../docs/WEBSITE-V2-RELEASE.md) covers GitHub previews, legacy route preservation and production rollback.
