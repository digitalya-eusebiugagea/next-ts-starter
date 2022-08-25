import { PageHeader } from 'antd';
import Link from 'next/link';
import React from 'react';

import KfiButton from '@/components/KfiButton';
import content from '@/content.json';

const Header = () => {
  return (
    <PageHeader className='header'>
      <img src='/icons/i-h-logo.png' alt='me' width='185' height='100' />
      <ul className='navigation'>
        <li className='navigation__item'>
          <Link href='/#features-section'>
            <a className='navigation__link'>{content.home.nav.item1}</a>
          </Link>
        </li>
        <li className='navigation__item'>
          <Link href='/#how-it-works-section'>
            <a className='navigation__link'>{content.home.nav.item2}</a>
          </Link>
        </li>
        <li className='navigation__item'>
          <Link href='/#present-section'>
            <a className='navigation__link'>{content.home.nav.item3}</a>
          </Link>
        </li>
        <li className='navigation__item'>
          <Link href='/#about-us-section'>
            <a className='navigation__link'>{content.home.nav.item4}</a>
          </Link>
        </li>
      </ul>
      <Link href='/#when-it-starts-section'>
        <KfiButton>{content.home.button}</KfiButton>
      </Link>
    </PageHeader>
  );
};

export default Header;
