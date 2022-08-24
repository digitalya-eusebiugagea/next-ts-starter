import { Typography } from 'antd';
import React from 'react';

import AppLayout from '@/layouts/AppLayout';
import legalInfoStaticData from '@/legal-info.json';
import Paragraphs from '@/ui-kit/Paragraphs';

const LegalInfoPage = () => {
  return (
    <AppLayout>
      <Typography.Title className='legal-info-page__title'>Impressum</Typography.Title>
      {legalInfoStaticData.map((item) => (
        <React.Fragment key={item.title}>
          <Typography.Title level={2} className='legal-info-page__paragraph-title'>
            {item.title}
          </Typography.Title>
          <Paragraphs
            paragraphs={item.paragraphs}
            paragraphProps={{ className: 'legal-info-page__paragraph-text' }}
          />
        </React.Fragment>
      ))}
    </AppLayout>
  );
};

export default LegalInfoPage;
