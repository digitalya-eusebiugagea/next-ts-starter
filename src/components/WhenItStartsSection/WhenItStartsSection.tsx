import { Grid, Input, Typography } from 'antd';
import React, { useState } from 'react';

import useContent from '@/hooks/useContent';

import KfiButton from '../KfiButton';

const WhenItStartsSection = () => {
  const content = useContent();
  const [value, setValue] = useState<string | undefined>(undefined);

  const currentBreakpoint = Grid.useBreakpoint();
  const isMobile = currentBreakpoint['xs'] || !currentBreakpoint['md'];
  // console.log('isMobile', isMobile);

  return (
    <section className='when-it-starts-section' id='when-it-starts-section'>
      <Typography.Title className='when-it-starts-section__title'>
        {content.home.whenItStartsSection.title}
      </Typography.Title>
      <Typography.Text className='when-it-starts-section__description'>
        {content.home.whenItStartsSection.description}
      </Typography.Text>
      <Input
        className='when-it-starts-section__input'
        value={value}
        placeholder={content.home.whenItStartsSection.inputPlaceholder}
        suffix={
          isMobile ? null : (
            <KfiButton className='when-it-starts-section__input-button'>
              {content.home.whenItStartsSection.inputBtnText}
            </KfiButton>
          )
        }
        onChange={(e) => setValue(e.target.value)}
      />
      {isMobile && (
        <KfiButton className='when-it-starts-section__input-button'>
          {content.home.whenItStartsSection.inputBtnText}
        </KfiButton>
      )}
    </section>
  );
};

export default WhenItStartsSection;
