import 'normalize.css';

import type { EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import { createEmotionSsrAdvancedApproach } from 'tss-react/next/pagesDir';

import theme from '@/styles/theme';

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

const { augmentDocumentWithEmotionCache, withAppEmotionCache } = createEmotionSsrAdvancedApproach({
  key: 'css',
});

export { augmentDocumentWithEmotionCache };

export default withAppEmotionCache(MyApp);
