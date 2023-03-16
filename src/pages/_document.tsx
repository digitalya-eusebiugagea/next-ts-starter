import { getInitColorSchemeScript } from '@mui/material';
import { Head, Html, Main, NextScript } from 'next/document';
import * as React from 'react';

import { roboto } from '@/styles/fonts';
import { WebConfig } from '@/utils/WebConfig';

import { augmentDocumentWithEmotionCache } from './_app';

const MyDocument = () => {
  return (
    <Html lang={WebConfig.locale} className={roboto.className}>
      <Head />
      <body>
        {getInitColorSchemeScript()}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

augmentDocumentWithEmotionCache(MyDocument);

export default MyDocument;
