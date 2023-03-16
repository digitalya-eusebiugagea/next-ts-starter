// Configuration for TypeScript files
module.exports = {
  "files": ["**/*.ts", "**/*.tsx"],
  "extends": [
    "next", // Next configuration
    "next/core-web-vitals", // Needed to avoid warning in next.js build: 'The Next.js plugin was not detected in your ESLint configuration'
    // "eslint:recommended", // Eslint recommended configuration by eslint.
    "airbnb-typescript", // Airbnb code style guide
    "plugin:import/recommended", // Linting of ES2015+ import/export syntax.
    "plugin:react/recommended", // Recommended react linting configs.
    "plugin:react-hooks/recommended", // Recommended react hooks linting configs.
    "plugin:jsx-a11y/recommended", // Turns on a11y rules for JSX.
    "plugin:@typescript-eslint/recommended", // Turns on rules from TypeScript-specific plugin.
    "plugin:prettier/recommended" // Turns off all rules that are unnecessary or might conflict with Prettier.
  ],
  "plugins": [
    "react",
    "react-hooks",
    "jsx-a11y",
    "@typescript-eslint",
    "import", // Support linting for import/export syntax
    "simple-import-sort", // Plugin for sorting imports in file.
    "unused-imports" // Plugin for removing unused imports
  ],
  "parser": "@typescript-eslint/parser", // Allows Eslint to understand TypeScript syntax.
  "parserOptions": {
    "project": "./tsconfig.json", // Specify where to find the root tsconfig file of your project.
    "ecmaVersion": 2021, // ECMAScript version supported in the project.
    "sourceType": "module", // set to `module` because we ue ECMAScript modules.
    "ecmaFeatures": {
      "jsx": true // enable jsx for React.
    }
  },
  "rules": {
    "@typescript-eslint/comma-dangle": "off", // Avoid conflict rule between Eslint and Prettier
    "@typescript-eslint/consistent-type-imports": "error", // Ensure `import type` is used when it's necessary
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-restricted-imports": "warn"
  },
  "settings": {
    "react": {
      "version": "detect" // auto-detect React version from package.json.
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"] // use typescript-eslint parser for .ts|tsx files.
    },
    "import/resolver": {
      "typescript": {
        "project": "./tsconfig.json",
        "alwaysTryTypes": true // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`.
      }
    }
  }
};