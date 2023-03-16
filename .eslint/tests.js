// Configuration for testing
module.exports = {
  "files": ["**/*.test.ts", "**/*.test.tsx"],
  "plugins": ["jest", "jest-formatting", "testing-library", "jest-dom"],
  "extends": [
    "plugin:jest/recommended",
    "plugin:jest-formatting/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"
  ]
};