// @ts-check
import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

/**
 * Shared ESLint Config Factory
 * @param {import('typescript-eslint').ConfigWithExtends[]} additionalConfigs
 * @returns {import('typescript-eslint').ConfigArray}
 */
export const baseConfig = (...additionalConfigs) =>
  tseslint.config(
    {
      ignores: ["eslint.config.mjs", "dist/**", ".next/**", "node_modules/**"],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    eslintPluginPrettierRecommended,
    {
      languageOptions: {
        globals: {
          ...globals.node,
          ...globals.browser,
          ...globals.jest,
        },
        sourceType: "module",
        parserOptions: {
          projectService: true,
          tsconfigRootDir: process.cwd(),
        },
      },
    },
    {
      rules: {
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/no-unsafe-argument": "warn",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { argsIgnorePattern: "^_" },
        ],
        "prettier/prettier": ["error", { endOfLine: "auto" }],
      },
    },
    ...additionalConfigs,
  );
