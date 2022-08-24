import { Button, Col, Grid, Row, Typography } from 'antd';
import React, { useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

import useContent from '@/hooks/useContent';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const PresentSection = () => {
  const content = useContent();

  const currentBreakpoint = Grid.useBreakpoint();
  const isMobile = currentBreakpoint['xs'] || !currentBreakpoint['lg'];

  const [data, setData] = useState(isMobile ? items.slice(0, 3) : items);

  const shouldLoadMoreAppear = isMobile && data.length < 9;

  const loadMore = () => {
    if (data.length === 3) {
      return setData(items.slice(0, 6));
    }
    return setData(items);
  };

  return (
    <section className='present-section'>
      <div className='present-section__banner' />
      <InstagramEmbed url='https://www.instagram.com/p/CUbHfhpswxt/' width={328} />
      <div className='present-section__body' id='present-section'>
        <Typography.Title className='how-it-works-section__title'>
          {content.home.presentSection.title}
        </Typography.Title>
        <Row>
          {data.map((value) => (
            <Col
              key={value}
              xs={24}
              sm={24}
              lg={8}
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '100px',
              }}
            >
              <div className='present-section__preview'></div>
            </Col>
          ))}
        </Row>
        {shouldLoadMoreAppear && (
          <Button type='text' className='present-section__load-more' onClick={loadMore}>
            Mehr laden...
          </Button>
        )}
      </div>
    </section>
  );
};

export default PresentSection;
