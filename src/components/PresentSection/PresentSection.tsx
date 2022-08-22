import { Col, Row, Typography } from 'antd';
import React from 'react';

import useContent from '@/hooks/useContent';

const PresentSection = () => {
  const content = useContent();
  return (
    <section className='present-section'>
      <div className='present-section__banner' />
      <div className='how-it-works-section__body'>
        <Typography.Title className='how-it-works-section__title'>
          {content.home.presentSection.title}
        </Typography.Title>
        <Row>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
            <Col
              key={value}
              span={8}
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '100px',
              }}
            >
              <div
                style={{
                  width: '400px',
                  height: '400px',
                  backgroundColor: 'red',
                  borderRadius: '20px',
                }}
              ></div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default PresentSection;
