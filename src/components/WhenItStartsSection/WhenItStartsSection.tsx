import { Input, Typography } from 'antd';
import React, { useState } from 'react';

import useContent from '@/hooks/useContent';

import KfiButton from '../KfiButton';

const WhenItStartsSection = () => {
  const content = useContent();
  const [value, setValue] = useState<string | undefined>(undefined);
  return (
    <section className='when-it-starts-section'>
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
          <KfiButton type='primary' className='when-it-starts-section__input-button'>
            {content.home.whenItStartsSection.inputBtnText}
          </KfiButton>
        }
        onChange={(e) => setValue(e.target.value)}
      />
    </section>
  );
};

export default WhenItStartsSection;
