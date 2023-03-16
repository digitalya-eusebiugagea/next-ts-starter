// Configuration for e2e testing (Cypress)
module.exports = {
  "files": ["**/*.cy.ts"],
  "plugins": ["cypress"],
  "extends": ["plugin:cypress/recommended"],
  "parserOptions": {
    "project": "./cypress/tsconfig.json"
  }
}