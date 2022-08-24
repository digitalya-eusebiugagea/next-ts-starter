import { Grid, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';

import useContent from '@/hooks/useContent';

const Footer = () => {
  const content = useContent();
  const currentBreakpoint = Grid.useBreakpoint();
  const isMobileMini = currentBreakpoint['xs'];
  return (
    <footer className='app-footer'>
      <img src='/icons/i-h-logo.png' alt='me' width='185' height='100' />
      <ul className='app-footer__navigation'>
        <li className='app-footer__navigation-item'>
          <Link href='/#features-section'>
            <a className='app-footer__navigation-link'>{content.home.nav.item1}</a>
          </Link>
        </li>
        <li className='app-footer__navigation-item'>
          <Link href='/#how-it-works-section'>
            <a className='app-footer__navigation-link'>{content.home.nav.item2}</a>
          </Link>
        </li>
        <li className='app-footer__navigation-item'>
          <Link href='/#present-section'>
            <a className='app-footer__navigation-link'>{content.home.nav.item3}</a>
          </Link>
        </li>
        <li className='app-footer__navigation-item'>
          <Link href='/#when-it-starts-section'>
            <a className='app-footer__navigation-link'>Newsletter</a>
          </Link>
        </li>
        <li className='app-footer__navigation-item'>
          <Link href='/#about-us-section'>
            <a className='app-footer__navigation-link'>{content.home.nav.item4}</a>
          </Link>
        </li>
      </ul>
      <div className='app-footer__privacy-policy'>
        <Link href='/datenschutz'>
          <Typography.Link>Datenschutzerklärung</Typography.Link>
        </Link>
        <Link href='/impressum'>
          <Typography.Link>Impressum</Typography.Link>
        </Link>
      </div>
      <Typography.Text className='app-footer__copyrights'>
        copyrights © 2022 -{isMobileMini && <br />} All Rights Reseved.
      </Typography.Text>
    </footer>
  );
};

export default Footer;
