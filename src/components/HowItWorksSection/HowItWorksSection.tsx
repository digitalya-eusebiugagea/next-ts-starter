import { Col, Row, Typography } from 'antd';
import React from 'react';

import content from '@/content.json';

interface HowItWorksItemProps {
  number: number;
  icon: string;
  description: string;
}
const HowItWorksItem: React.FC<HowItWorksItemProps> = ({ number, icon, description }) => {
  return (
    <div className='item'>
      <Typography.Text className='item__number'>{number}</Typography.Text>
      <img src={icon} alt='icon' className='item__icon' />
      <Typography.Paragraph className='item__description'>{description}</Typography.Paragraph>
    </div>
  );
};

const HowItWorksSection = () => {
  return (
    <section className='how-it-works-section' id='how-it-works-section'>
      <div className='how-it-works-section__banner' />
      <div className='how-it-works-section__body'>
        <Typography.Title className='how-it-works-section__title'>
          {content.home.howItWorksSection.title}
        </Typography.Title>
        <Row gutter={80} className='how-it-works-section__items-container'>
          <Col xs={24} sm={24} lg={8}>
            <HowItWorksItem
              number={1}
              icon='/assets/images/ic-download.png'
              description={content.home.howItWorksSection.download}
            />
          </Col>
          <Col xs={24} sm={24} lg={8}>
            <HowItWorksItem
              number={2}
              icon='/assets/images/ic-local-sound.png'
              description={content.home.howItWorksSection.localSound}
            />
          </Col>
          <Col xs={24} sm={24} lg={8}>
            <HowItWorksItem
              number={3}
              icon='/assets/images/ic-change.png'
              description={content.home.howItWorksSection.change}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default HowItWorksSection;
