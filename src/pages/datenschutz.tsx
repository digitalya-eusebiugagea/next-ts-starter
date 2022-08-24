import { Typography } from 'antd';
import React from 'react';

import dataPrivacyStaticData from '@/data-privacy.json';
import AppLayout from '@/layouts/AppLayout';
import Paragraphs from '@/ui-kit/Paragraphs';

const DataPrivacyPage = () => {
  return (
    <AppLayout>
      <Typography.Title className='legal-info-page__title'>Datenschutzrichtlinie</Typography.Title>
      {dataPrivacyStaticData.map((item) => (
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

export default DataPrivacyPage;
