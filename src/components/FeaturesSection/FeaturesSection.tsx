import { Button } from 'antd';
import React, { useRef, useState } from 'react';
import type { Settings } from 'react-slick';
import Slider from 'react-slick';

const FeaturesSection = () => {
  const settings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerPadding: '60px',
    className: 'feature-section__slider',
    slidesToScroll: 1,
    initialSlide: 2,
    centerMode: true,
    afterChange: (index) => console.log('slide', index),
  };

  const imagesSrc = [
    '/assets/images/app-1.png',
    '/assets/images/app-2.png',
    '/assets/images/app-3.png',
    '/assets/images/app-4.png',
    '/assets/images/app-5.png',
  ];
  const [slideIndex] = useState(2);

  const iphoneContainerStyles = {};
  const iphoneStyles = {};
  const appScreenStyles = {};

  const sliderRef = useRef<Slider | null>(null);

  return (
    <section className='feature-section'>
      <div className='features-section__banner'></div>
      {/* <Carousel /> */}
      <div className='features-section__body' id='features-section'>
        <Slider {...settings} ref={sliderRef}>
          {imagesSrc.map((imgSrc, index) => (
            <div key={imgSrc}>
              <div style={{ margin: '0 auto' }}>
                <div style={{ width: '100px', height: '100%', backgroundColor: 'aquamarine' }} />
                <div
                  className='features-section__iphone-container'
                  style={(slideIndex === index && iphoneContainerStyles) || undefined}
                >
                  <img
                    src='/assets/images/iphone.png'
                    alt='me'
                    className='features-section__iphone'
                    style={(slideIndex === index && iphoneStyles) || undefined}
                  />
                  <img
                    src={imgSrc}
                    alt='me'
                    className='features-section__app-screen'
                    style={(slideIndex === index && appScreenStyles) || undefined}
                  />
                </div>
                <div style={{ width: '100px' }} />
              </div>
            </div>
          ))}
        </Slider>
        <Button
          className='features-section__left-arrow'
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <img src='/icons/ic-arrow-left.svg' alt='me' width={50} />
        </Button>
        <Button
          className='features-section__right-arrow'
          onClick={() => sliderRef.current?.slickNext()}
        >
          <img src='/icons/ic-arrow-right.svg' alt='me' width={50} />
        </Button>
      </div>
    </section>
  );
};

export default FeaturesSection;
