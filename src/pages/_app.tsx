import 'normalize.css';

import type { EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import { createEmotionSsrAdvancedApproach } from 'tss-react/next/pagesDir';

import ColorModeContext from '@/contexts/ColorModeContext';

import themeDark from '../styles/theme-dark';
import themeLight from '../styles/theme-light';

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, pageProps } = props;

  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const theme = React.useMemo(() => (mode === 'light' ? themeLight : themeDark), [mode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

const { augmentDocumentWithEmotionCache, withAppEmotionCache } = createEmotionSsrAdvancedApproach({
  key: 'css',
});

export { augmentDocumentWithEmotionCache };

export default withAppEmotionCache(MyApp);
