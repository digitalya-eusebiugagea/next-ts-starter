// Configuration for JavaScript files
module.exports = {
  "extends": [
    "next", // Next configuration
    "next/core-web-vitals", // Needed to avoid warning in next.js build: 'The Next.js plugin was not detected in your ESLint configuration'
    // "eslint:recommended", // Eslint recommended configuration by eslint.
    "airbnb", // Airbnb code style guide
    "plugin:import/recommended", // Linting of ES2015+ import/export syntax.
    "plugin:react/recommended", // Recommended react linting configs.
    "plugin:react-hooks/recommended", // Recommended react hooks linting configs.
    "plugin:jsx-a11y/recommended", // Turns on Accessibility rules for JSX.
    "plugin:prettier/recommended" // Turns off all rules that are unnecessary or might conflict with Prettier.
  ],
  "plugins": [
    "react",
    "react-hooks",
    "jsx-a11y",
    "import", // Support linting for import/export syntax
    "simple-import-sort", // Plugin for sorting imports in file.
    "unused-imports" // Plugin for removing unused imports
  ],
  "rules": {
    // This has to be 1-on-1 with the settings present in .prettierrc
    "prettier/prettier": [
      "error",
      {
        "jsxSingleQuote": true,
        "singleQuote": true,
        "semi": true,
        "tabWidth": 2,
        "trailingComma": "all",
        "printWidth": 100,
        "bracketSameLine": false,
        "useTabs": false,
        "arrowParens": "always",
        "endOfLine": "auto"
      }
    ],
    "import/first": "warn",
    "import/newline-after-import": "warn",
    "import/no-duplicates": "error",
    "import/no-named-as-default-member": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-sort-props": [
      "warn",
      {
        "callbacksLast": true,
        "shorthandFirst": true,
        "ignoreCase": true,
        "reservedFirst": true,
        "noSortAlphabetically": true
      }
    ],
    "react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
    "jsx-a11y/anchor-is-valid": "off", // Next.js use his own internal link system
    "react/require-default-props": "off", // Allow non-defined react props as undefined
    "react/jsx-props-no-spreading": "off", // _app.tsx uses spread operator and also, react-hook-form
    "react-hooks/exhaustive-deps": "off", // Incorrectly report needed dependency with Next.js router
    "@next/next/no-img-element": "off", // We currently not using next/image because it isn't supported with SSG mode
    "import/prefer-default-export": "off", // Named export is easier to refactor automatically
    "simple-import-sort/imports": "warn", // Import configuration for `eslint-plugin-simple-import-sort`
    "simple-import-sort/exports": "warn", // Export configuration for `eslint-plugin-simple-import-sort`
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "no-restricted-imports": "off",
  },
}