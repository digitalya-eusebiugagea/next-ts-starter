import { DownOutlined } from '@ant-design/icons';
import { Grid, Typography } from 'antd';
import React from 'react';

import content from '@/content.json';

const IntroSection = () => {
  const currentBreakpoint = Grid.useBreakpoint();

  const isMobile = currentBreakpoint['xs'] || !currentBreakpoint['lg'];

  return (
    <section className='intro-section'>
      <div className='intro-section__banner'>
        <Typography.Title className='intro-section__banner-title'>
          {content.home.introSection.title}
        </Typography.Title>
        <div className='features-section__iphone-container intro-section__banner-iphone'>
          <img src='/assets/images/iphone.png' alt='me' className='features-section__iphone' />
          <img src='/assets/images/app-3.png' alt='me' className='features-section__app-screen' />
        </div>
        {isMobile && <DownOutlined color='pink' className='intro-section__banner-icon' />}
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
