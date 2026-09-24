import type { OxfmtConfig } from "oxfmt";

/**
 * Shared oxfmt configuration. oxfmt has no `extends`, so spread it into an
 * `oxfmt.config.ts`:
 *
 * ```ts
 * import config from "@diegoux/oxc-config/oxfmt";
 * import { defineConfig } from "oxfmt";
 *
 * export default defineConfig({ ...config });
 * ```
 */
const config = {
  useTabs: false,
  tabWidth: 2,
  arrowParens: "avoid",
  printWidth: 100,
  sortImports: true,
  sortPackageJson: true,
  overrides: [
    {
      files: ["*.md", "*.mdx"],
      options: {
        printWidth: 80,
        proseWrap: "always",
      },
    },
  ],
} satisfies OxfmtConfig;

export default config;
