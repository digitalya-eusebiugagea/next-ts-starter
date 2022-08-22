import { Col, Row, Typography } from 'antd';
import React from 'react';

import useContent from '@/hooks/useContent';

import Paragraphs from '../../ui-kit/Paragraphs';
import PersonCard from '../PersonCard';

const PresentSection = () => {
  const content = useContent();

  return (
    <section className='about-us-section'>
      <div className='about-us-section__banner' />
      <div className='how-it-works-section__body'>
        <Typography.Title className='how-it-works-section__title'>
          {content.home.aboutUsSection.title}
        </Typography.Title>
        <div className='about-us-section__paragraphs-container'>
          <Paragraphs paragraphs={content.home.aboutUsSection.paragraphs} />
        </div>
        <Row>
          {content.home.aboutUsSection.people.map((person) => (
            <Col
              key={person.name}
              span={12}
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '100px',
              }}
            >
              <PersonCard person={person} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default PresentSection;
