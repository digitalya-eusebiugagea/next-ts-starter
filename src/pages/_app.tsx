import 'normalize.css';

import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// Wrap MyApp with appWithTranslation HOC manually to prevent conflict
export default appWithTranslation(MyApp);
