module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'npm run check-types',
  '*.{json,jsonc,yaml,yml,less,scss,sass,css,html,mdx}': ['prettier --write'],
  'package.json': 'npx sort-package-json',
};
