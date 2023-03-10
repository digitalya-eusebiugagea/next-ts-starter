# Boilerplate and Starter for Next JS 12+, TypeScript, Less and Ant Design

๐ Boilerplate and Starter for Next.js and TypeScript โก๏ธ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, Testing Library, Commitlint, VSCode, Less, Ant Design.

Clone this project and use it to create your own [Next.js](https://nextjs.org) project. This is a fork from [Next js Starter Boilerplate](https://creativedesignsguru.com/demo/Nextjs-Boilerplate/).

### Features

Developer experience first:

- โก [Next.js](https://nextjs.org) for Static Site Generator
- ๐ฅ Type checking [TypeScript](https://www.typescriptlang.org)
- ๐ Integrate with [Less CSS](https://lesscss.org/)
- ๐ Integrate with [Ant Design](https://ant.design/)
- โ Strict Mode for TypeScript and React 18
- ๐ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and more others high industry standards recomendations)
- ๐ Code Formatter with [Prettier](https://prettier.io)
- ๐ฆ Husky for Git Hooks
- ๐ซ Lint-staged for running linters on Git staged files
- ๐ Lint git commit with Commitlint
- ๐ฆบ Unit Testing with Jest and React Testing Library
- ๐งช E2E Testing with Cypress
- ๐ก Absolute Imports using `@` prefix
- ๐ VSCode configuration: Debug, Settings, Tasks and extension for ESLint, Prettier, TypeScript, Jest
- ๐ค SEO metadata, JSON-LD and Open Graph tags with Next SEO
- โ๏ธ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- ๐ฑ๏ธ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
- ๐ Include a FREE minimalist theme
- ๐ฏ Maximize lighthouse score

Built-in feature from Next.js:

- โ Minify HTML & CSS
- ๐จ Live reload
- โ Cache busting

### Philosophy

- Minimal code
- SEO-friendly
- ๐ Production-ready

### Requirements

- Node.js 14+ and npm

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
โโโ README.md                       # README file
โโโ __mocks__                       # Mocks for testing
โโโ .github                         # GitHub folder
โโโ .husky                          # Husky configuration
โโโ .vscode                         # VSCode configuration
โโโ public                          # Public assets folder
โโโ src
โ   โโโ layouts                     # Layouts components
โ   โโโ pages                       # Next JS Pages
โ   โโโ pages.test                  # Next JS Pages tests (this avoid test to treated as a Next.js pages)
โ   โโโ styles                      # Styles folder
โ   โโโ templates                   # Default template
โ   โโโ utils                       # Utility functions
โโโ tailwind.config.js              # Tailwind CSS configuration
โโโ tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/utils/AppConfig.ts`: configuration file
- `next.config.js => lessLoaderOptions.lessOptions.modifyVars`: change less variables (also antd theme variables)

### Less

The index files for styles is inside src/styles/index.less. In there you can use global imports and the compiler will take care of automatically imported all the files from glob patterns. This has been done with the help of a less plugin.

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

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### Testing

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we have a `pages.test` folder to write tests from files located in `pages` folder.

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.
