import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { WebConfig } from '@/utils/WebConfig';

interface IMetaProps {
  title: string;
  description: string;
  canonical?: string;
}

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta key='charset' charSet='UTF-8' />
        <meta key='viewport' name='viewport' content='width=device-width,initial-scale=1' />
        <link key='apple' rel='apple-touch-icon' href={`${router.basePath}/apple-touch-icon.png`} />
        <link
          key='icon32'
          rel='icon'
          type='image/png'
          sizes='32x32'
          href={`${router.basePath}/favicon-32x32.png`}
        />
        <link
          key='icon16'
          rel='icon'
          type='image/png'
          sizes='16x16'
          href={`${router.basePath}/favicon-16x16.png`}
        />
        <link key='favicon' rel='icon' href={`${router.basePath}/favicon.ico`} />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: WebConfig.locale,
          site_name: WebConfig.siteName,
        }}
      />
    </>
  );
};

export default Meta;
