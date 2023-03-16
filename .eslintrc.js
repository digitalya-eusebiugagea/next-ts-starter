const javascript = require('./.eslint/javascript');
const typescript = require('./.eslint/typescript');
const tests = require('./.eslint/tests');
const e2e = require('./.eslint/e2e');

module.exports = {
  // Configuration for JavaScript files
  ...javascript,
  overrides: [
    // Configuration for TypeScript files
    typescript,
    // Configuration for testing
    tests,
    // Configuration for e2e testing (Cypress)
    e2e,
  ],
};
