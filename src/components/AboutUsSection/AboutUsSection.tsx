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
      <div className='about-us-section__body' id='about-us-section'>
        <Typography.Title className='how-it-works-section__title'>
          {content.home.aboutUsSection.title}
        </Typography.Title>
        <div className='about-us-section__paragraphs-container'>
          <Paragraphs paragraphs={content.home.aboutUsSection.paragraphs} />
        </div>
        <Row gutter={100} className='about-us-section__persons-card-row'>
          {content.home.aboutUsSection.people.map((person) => (
            <Col
              key={person.name}
              xs={24}
              sm={24}
              md={12}
              className='about-us-section__person-card-col'
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
