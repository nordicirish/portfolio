import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Ignore build output and vendored directories
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "react-email-starter/**",
      "public/**",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: { version: "detect" }, // Auto-detect installed React version (currently 19)
    },
  },
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "react/react-in-jsx-scope": "off",   // Not needed with React 17+ JSX transform
      "react/prop-types": "off",            // TypeScript handles prop validation
    },
  },
]);

