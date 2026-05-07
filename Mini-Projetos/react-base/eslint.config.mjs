import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginPrettier from "eslint-plugin-prettier/recommended";
import babelParser from "@babel/eslint-parser";

export default [
  // 1. Configuração base do JS e React
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  
  // 2. Configuração customizada
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    languageOptions: {
      parser: babelParser,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Não precisa no React moderno
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  
  // 3. Prettier sempre por último para sobrescrever conflitos
  pluginPrettier,
];