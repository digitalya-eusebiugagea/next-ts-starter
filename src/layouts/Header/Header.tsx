import { PageHeader } from 'antd';
import React from 'react';

import KfiButton from '@/components/KfiButton';
import content from '@/content.json';

const Header = () => {
  return (
    <PageHeader className='header'>
      <img src='/icons/i-h-logo.png' alt='me' width='185' height='100' />
      <ul className='navigation'>
        <li className='navigation__item'>
          <a href='#features-section' className='navigation__link'>
            {content.home.nav.item1}
          </a>
        </li>
        <li className='navigation__item'>
          <a href='#how-it-works-section' className='navigation__link'>
            {content.home.nav.item2}
          </a>
        </li>
        <li className='navigation__item'>
          <a href='#present-section' className='navigation__link'>
            {content.home.nav.item3}
          </a>
        </li>
        <li className='navigation__item'>
          <a href='#about-us-section' className='navigation__link'>
            {content.home.nav.item4}
          </a>
        </li>
      </ul>
      <KfiButton>{content.home.button}</KfiButton>
    </PageHeader>
  );
};

export default Header;
