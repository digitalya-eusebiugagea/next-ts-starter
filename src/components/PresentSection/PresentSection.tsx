import { Button, Col, Grid, Row, Typography } from 'antd';
import React, { useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

import useContent from '@/hooks/useContent';

const items = [
  'https://www.instagram.com/p/ChmRv0oIv-U/?igshid=YmMyMTA2M2Y=',
  'https://www.instagram.com/p/ChmRq9poaOw/?igshid=YmMyMTA2M2Y=',
  'https://www.instagram.com/p/ChmRlGkojse/?igshid=YmMyMTA2M2Y=',
  'https://www.instagram.com/p/ChmRv0oIv-U/?igshid=YmMyMTA2M2Y=',
  'https://www.instagram.com/p/ChmRq9poaOw/?igshid=YmMyMTA2M2Y=',
  'https://www.instagram.com/p/ChmRlGkojse/?igshid=YmMyMTA2M2Y=',
  'https://www.instagram.com/p/ChmRv0oIv-U/?igshid=YmMyMTA2M2Y=',
  'https://www.instagram.com/p/ChmRq9poaOw/?igshid=YmMyMTA2M2Y=',
  'https://www.instagram.com/p/ChmRlGkojse/?igshid=YmMyMTA2M2Y=',
];

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
              {/* <div className='present-section__preview'></div> */}
              <InstagramEmbed url={value} width={328} />
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
