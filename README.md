# @diegoux/oxc-config

Shared [oxlint](https://oxc.rs/docs/guide/usage/linter) and
[oxfmt](https://oxc.rs/docs/guide/usage/formatter) configuration.

## Install

```sh
bun add -d @diegoux/oxc-config oxlint oxfmt
```

## Usage

The configs are consumed from TypeScript config files. oxlint only resolves
shared configs from packages in `oxlint.config.ts` (`.oxlintrc.json` `extends`
accepts file paths only), and oxfmt has no `extends` at all, so its config is
spread into the local one.

`oxlint.config.ts`:

```ts
import config from "@diegoux/oxc-config/oxlint";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [config],
  // Project-specific settings go here.
  ignorePatterns: ["dist"],
});
```

`oxfmt.config.ts`:

```ts
import config from "@diegoux/oxc-config/oxfmt";
import { defineConfig } from "oxfmt";

export default defineConfig({
  ...config,
  // Project-specific settings go here.
});
```

Loading TypeScript config files requires the Node-based `oxlint`/`oxfmt` npm
packages and a Node version with type stripping (Node 22.18+ or 24+).

## Development

```sh
bun install
bun run build      # compile src/ to dist/
bun run typecheck
bun run lint
bun run fmt
```

This repo lints and formats itself with the configs in `src/`.

## Publishing

`prepack` runs the build, so `dist/` is always fresh in the tarball:

```sh
npm pack --dry-run   # inspect the tarball contents
npm publish          # publishConfig.access is already "public"
```
