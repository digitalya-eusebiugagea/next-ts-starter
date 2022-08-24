const path = require('path');
const withLess = require('next-with-less');
const lessPluginGlob = require('less-plugin-glob');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
  withLess({
    // cssLoaderOptions: {
    //   // ...
    //   mode: 'local',
    //   // eslint-disable-next-line no-undef
    //   localIdentName:
    //     process.env.NODE_ENV === 'development'
    //       ? '[local]--[hash:base64:4]'
    //       : '[hash:base64:8]', // invalid! for Unify getLocalIdent (Next.js / CRA), Cannot set it, but you can rewritten getLocalIdentFn
    //   exportLocalsConvention: 'camelCase',
    //   exportOnlyLocals: false,
    //   // ...
    //   // eslint-disable-next-line no-unused-vars
    //   getLocalIdent: (context, localIdentName, localName, options) => {
    //     return 'whatever_random_class_name';
    //   },
    // },

    // OR all the vars are in /src/styles/antd.less
    lessLoaderOptions: {
      /* ... */
      lessOptions: {
        /* ... */
        modifyVars: {
          'primary-color': '#F4A58B',
        },
        javascriptEnabled: true,
        plugins: [lessPluginGlob],
        paths: [path.resolve(__dirname, 'src')], // This is the important part!
      },
    },

    // for Next.js ONLY
    nextjs: {
      localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
    },

    // Other Config Here...

    // webpack(config) {
    //   return config;
    // },

    eslint: {
      dirs: ['.'],
    },
    poweredByHeader: false,
    trailingSlash: true,
    basePath: '',
    // The starter code load resources from `public` folder with `router.basePath` in React components.
    // So, the source code is "basePath-ready".
    // You can remove `basePath` if you don't need it.
    reactStrictMode: true,
  }),
);
