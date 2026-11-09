# N/NPC website release

Astro lives in `website-v2/`. GitHub pull requests targeting `main` use the existing Vercel `nnpc` project for previews. Merging to `main` triggers its production build. The public origin is `https://www.nnpc.ai`. The apex keeps its existing redirect. The build checks Vercel's system project ID so the other two Git-linked projects continue to serve the legacy homepage and sitemap.

The build copies the Astro static output and an explicit list of legacy public files into `dist/`. The existing root `api/` and `lib/` still run in the same Vercel project. Protected previews keep the Astro robots directive and a restrictive robots.txt. The production sitemap adds the three localized sets of pages and keeps legacy entries.

Before merge, verify the protected preview with the checklist below. Use a test account and test data for authenticated flows. Record the prior production deployment ID and verify it remains available for rollback.

- Verify the homepage, all language paths, the INTAG map and application modules, CSS and image delivery, canonical tags, hreflang, sitemap, robots and a true 404.
- Check registration and the OEE calculator, including `/oee?t=…`, `/oee?token=…`, old `/oee/*.html` paths and browser storage on the public origin. The original homepage remains reachable through `/oee`.
- Verify certificate lookup, old certificate links and admin authentication. Check spatial assessment and its admin access.
- Verify legacy APIs return the expected status and content type. Keep real tokens and customer records out of test logs.

After merge, match the production deployment SHA to GitHub and verify the public aliases and smoke routes. If a critical check regresses, roll back the Vercel project to the previous production deployment, then revert the merge in GitHub so future deploys reproduce the recovered state.
