# Boilerplate and Starter for Next JS 13 and TypeScript

🚀 Boilerplate and Starter for Next.js and TypeScript ⚡️ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, Testing Library, Commitlint, VSCode.

Clone this project and use it to create your own [Next.js](https://nextjs.org) project. This project was heavily inspired by this two repositories: [Next js Starter Boilerplate](https://creativedesignsguru.com/demo/Nextjs-Boilerplate/) and [TS NextJS Tailwind Starter](https://creativedesignsguru.com/demo/Nextjs-Boilerplate/).

### Features

Developer experience first:

- ⚡ [Next.js 13](https://nextjs.org)
- ⚛️ [React 18](https://react.dev/)
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- ✅ Strict Mode for TypeScript and React 18
- 📏 [ESLint](https://eslint.org) — Find and fix problems in your code, also will auto sort your imports
- 💖 [Prettier](https://prettier.io) — Format your code consistently
- 💡 Absolute Import and Path Alias — Import components using @/ prefix
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are committed
- 🚓 Conventional Commit Lint — Make sure you & your teammates follow conventional commits
- 🎁 Semantic Release - Automatic changelog generation
- 🤖 Next SEO - SEO metadata, JSON-LD and Open Graph tags
- 🗺️ Next Sitemap - Generate sitemap.xml and robots.txt
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🦺 Unit Testing with Jest and React Testing Library
- 💯 Maximize lighthouse score
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for ESLint, Prettier, TypeScript, Jest

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Expansion pack

- **cypress** - 🧪 E2E Testing with Cypress
- **i18n** - 🌐 Internationalization with next-i18next
- **storybook** - 🖋️ Documentation and component showcasing with Storybook
- **mui** - 🫶 Integration with Material UI component library
- **antd** - 🫶 Integration with Ant Design component library **[WIP]**
- **chakra** - 🫶 Integration with Chakra UI component library **[WIP]**
- **mantine** - 🫶 Integration with Mantine UI component library **[WIP]**

### Philosophy

- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js 18+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/ixartz/Next-js-Boilerplate.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```shell
.
├── README.md                       # README file
├── __mocks__                       # Mocks for testing
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── layouts                     # Layouts components
│   ├── pages                       # Next JS Pages
│   └── utils                       # Utility functions
├── .eslintrc                       # Eslint configuration
├── .npmrc                          # Npm configuration
├── .nvmrc                          # Node version used
├── .prettierrc                     # Prettier configuration
├── .commitlint.config.js           # Commitlint configuration
├── env-example                     # Environment example
├── .jest.config.js                 # Jest configuration
├── lint-staged.config.js           # Lint staged configuration
├── next-env.d.ts                   # Use NextJS types
├── next-sitemap.config.js          # NextJS Sitemap configuration
├── next.config.js                  # NextJS configuration
├── release.config.js               # Semantic release configuration
├── renovate                        # Renovate configuration
└── tsconfig.json                   # TypeScript configuration
```

### Deploy to production

You can see the results locally in production mode with:

```shell
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js).

You can create an optimized production build with:

```shell
npm run build-prod
```

Now, your app is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### Customization

You can easily configure NextJS Boilerplate. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/utils/AppConfig.ts`: configuration file

### Recommended component structure

We recommend collocating all the files related to a component. This means that instead of having the component in a directory, the tests for the component in a different directory and styles in a different one, put all these files in a directory named after the component. Then just use an `index.ts` to export from there the component by default. This has proven to be more **scalable** and **maintainable**.

```shell
.   ComponentName                              # Directory containing all the files related to this component
├── ComponentName.tsx                          # The component
├── ComponentName.test.tsx                     # Tests for the component
├── ComponentName.styles[.module].(scss/less)  # Styles for the component written in scss/less or using also CSS modules 
├── ComponentName.styles.ts                    # Styles for the component written in a CSS-in-JS fashion 
├── useComponentName.ts                        # Custom hook for the component
├── index.ts                                   # Here you export your component to be used anywhere. Normally it has just the next line of code.
export { default } from './ComponentName.tsx'
```

### Testing

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we suggest to create a `pages.test` folder to write tests from files located in `pages` folder.

```shell
npm run test                        # Run your tests
npm run test:staged                 # Run your tests with the --bail option
```

### Scripts

```shell
npm run postbuild                   # Runs after the build, it generates the sitemap
npm run test:staged                 # abc
npm run build-stats                 # Run build with bundle analyzer in place
npm run export                      # Export all your pages to static HTML files that you can serve with any host
npm run clean                       # Clean the build
npm run lint                        # Lint all the files
npm run lint:fix                    # Lint all the files and fix any solvable issue
npm run format                      # Format all the files
npm run check-types                 # Envoke the TypeScript compiler 
npm run prepare                     # Run after npm install, it instals husky 
npm run semantic-release            # See how a generated changelog for your commits would look like
npm run commit                      # Make a git commit with indications from commit lint
npm run clear:dependencies          # Remove node_modules
```

For `next export` see this https://stackoverflow.com/questions/61724368/what-is-the-difference-between-next-export-and-next-build-in-next-js

`lint` and `lint:fix` scripts are using `eslint`, not `next lint`, because the latter can't reach the `.eslintrc` config used in the project, no matter how it is used.
This is how it would look using next lint:

```shell
"lint": "next lint . -c .eslintrc --ext .js,.jsx,.ts,.tsx --fix --ignore-path .gitignore"
"lint:fix": "next lint . -c .eslintrc --fix --ext .js,.jsx,.ts,.tsx --fix --ignore-path .gitignore"
```

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.
