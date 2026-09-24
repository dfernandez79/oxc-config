import { defineConfig } from "oxlint";

import config from "./src/oxlint.ts";

export default defineConfig({
  extends: [config],
  ignorePatterns: ["dist"],
});
