import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import Hello from '@/components/Hello';
import Main from '@/layouts/Main';
import Meta from '@/layouts/Meta';
import { WebConfig } from '@/utils/WebConfig';

function Index() {
  const { t } = useTranslation();

  return (
    <Main meta={<Meta title={WebConfig.title} description={WebConfig.description} />}>
      <Hello />
      <h1>{t('common:hello')}</h1>
      <h1>{t('hello', { ns: 'common' })}</h1>
    </Main>
  );
}

export default Index;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(locale && (await serverSideTranslations(locale, ['common']))),
      // Will be passed to the page component as props
    },
  };
};
