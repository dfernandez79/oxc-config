import { defineConfig } from "oxfmt";

import config from "./src/oxfmt.ts";

export default defineConfig({
  ...config,
  ignorePatterns: ["dist"],
});
