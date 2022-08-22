import { Typography } from 'antd';
import React from 'react';

import content from '@/content.json';

const IntroSection = () => {
  return (
    <section className='intro-section'>
      <div className='intro-section__banner'>
        <Typography.Title style={{ color: 'white' }}>
          {content.home.introSection.title}
        </Typography.Title>
      </div>
      <div className='intro-section__body'>
        <div style={{ width: '53%' }}>
          <Typography.Paragraph style={{ color: 'white' }}>
            {content.home.introSection.paragraph1}
          </Typography.Paragraph>
          <Typography.Paragraph style={{ color: 'white' }}>
            {content.home.introSection.paragraph2}
          </Typography.Paragraph>
        </div>
        <div style={{ width: '47%' }}>
          <Typography.Paragraph style={{ color: 'white' }}>
            {content.home.introSection.paragraph2}
          </Typography.Paragraph>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
