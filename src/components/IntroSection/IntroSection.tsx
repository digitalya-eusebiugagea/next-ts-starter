import { DownOutlined } from '@ant-design/icons';
import { Grid, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';

import content from '@/content.json';

import KfiButton from '../KfiButton';

const IntroSection = () => {
  const currentBreakpoint = Grid.useBreakpoint();

  const isMobile = currentBreakpoint['xs'] || !currentBreakpoint['lg'];

  return (
    <section className='intro-section'>
      <div className='intro-section__banner'>
        <Typography.Title className='intro-section__banner-title'>
          Geschichte läuft,
          <br /> Geschichte klingt: <br />
          Geschichte(n) erfahren.
        </Typography.Title>
        <div className='features-section__iphone-container intro-section__banner-iphone'>
          <img src='/assets/images/iphone.png' alt='me' className='features-section__iphone' />
          <img src='/assets/images/app-3.png' alt='me' className='features-section__app-screen' />
        </div>
        {isMobile && <DownOutlined color='pink' className='intro-section__banner-icon' />}
      </div>
      <div className='intro-section__body'>
        <div style={{ width: '53%' }} className='intro-section__text'>
          <Typography.Paragraph style={{ color: 'white' }}>
            {content.home.introSection.paragraph1}
          </Typography.Paragraph>
          <Typography.Paragraph style={{ color: 'white' }}>
            {content.home.introSection.paragraph2}
          </Typography.Paragraph>
          <div className='intro-section__buttons-container'>
            <Typography.Link disabled className='intro-section__install-button'>
              <img src='/icons/app-store.png' alt='me' />
            </Typography.Link>
            <Typography.Link disabled className='intro-section__install-button'>
              <img src='/icons/google-play.png' alt='me' />
            </Typography.Link>
            <Link href='/#when-it-starts-section'>
              <KfiButton className='intro-section__button'>{content.home.button}</KfiButton>
            </Link>
          </div>
        </div>
        <div style={{ width: '47%' }}></div>
      </div>
    </section>
  );
};

export default IntroSection;
