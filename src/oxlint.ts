import type { OxlintConfig } from "oxlint";

/**
 * Shared oxlint configuration. Extend it from an `oxlint.config.ts`:
 *
 * ```ts
 * import config from "@diegoux/oxc-config/oxlint";
 * import { defineConfig } from "oxlint";
 *
 * export default defineConfig({ extends: [config] });
 * ```
 */
const config = {
  plugins: ["import", "typescript", "unicorn", "oxc"],
  categories: {
    correctness: "error",
    suspicious: "warn",
  },
  rules: {
    "func-style": ["error", "expression", { allowArrowFunctions: true }],
    "prefer-arrow-callback": ["error", { allowNamedFunctions: false }],
    "arrow-body-style": ["error", "as-needed"],
    "prefer-const": "error",
    "no-var": "error",
    "import/first": "error",
    "import/no-duplicates": "error",
    "import/extensions": ["error", "always", { ignorePackages: true, checkTypeImports: true }],
    "import/exports-last": "error",
    "import/group-exports": "error",
    "typescript/consistent-type-definitions": ["error", "type"],
    "typescript/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        fixStyle: "separate-type-imports",
        disallowTypeAnnotations: true,
      },
    ],
    "typescript/consistent-type-exports": "error",
    "typescript/prefer-nullish-coalescing": "error",
    "unicorn/filename-case": ["error", { case: "kebabCase" }],
    "unicorn/no-null": "error",
    "oxc/no-const-enum": "error",
  },
} satisfies OxlintConfig;

export default config;
