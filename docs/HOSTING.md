# Hosting and entry points

The game is static GitHub Pages content, published from `main` at `/`. The
repository's protected branch requires a reviewed PR to add or change `CNAME`.
The custom domain in that file is `drawbattles.com`. The same relative asset URLs
support the custom-domain root, the original `/Ink-Battle/` project path and
packaged Android files.

| Entry | Purpose |
| --- | --- |
| `index.html` / `/` | Current tabletop game, mouse/touch and optional Quest MR |
| `mr.html`, `ink-battle.html` | Compatibility redirects to the current game |
| `classic.html` | Preserved classic 2D/Gemma archive |

The service worker versions the full shell, including the archive and redirects.
The manifest starts at `index.html`; its explicit `id` preserves the original
`ink-battle.html` PWA identity on each origin. Storage is origin-scoped: switching
from github.io to the new domain does not automatically transfer local saves,
medals or downloaded models. The Android package retains its local origin.

DNS configuration, following [GitHub's custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site):

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `ronitervo.github.io` |

Keep the GitHub account's `_github-pages-challenge-RONITERVO` TXT record for
domain ownership verification. No wildcard, paid hosting or email changes are
needed. After the CNAME PR merges, check Pages DNS validation and certificate
issuance, then enforce HTTPS and verify both apex and `www` URLs. HTTPS is required
for WebXR and service workers. DNS/certificate propagation is external to CI.
