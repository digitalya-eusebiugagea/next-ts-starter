/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { MenuOutlined } from '@ant-design/icons';
import { Button, Modal, PageHeader, Typography } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';

import useContent from '@/hooks/useContent';

import KfiButton from '../KfiButton';
import MediaButtons from '../MediaButtons';

const PersonViewModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const content = useContent();

  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <PageHeader className='mobile-navigation__header'>
        <p>#iH</p>
        <Button
          className='person-view__close-button'
          icon={<MenuOutlined />}
          onClick={toggleOpen}
        />
      </PageHeader>
      <Modal className='mobile-navigation__menu' visible={open}>
        <Button
          className='mobile-navigation__menu-close-button'
          icon={
            <img
              src='/assets/images/ic-close.png'
              alt='close icon'
              className='mobile-navigation__menu-delete-icon'
            />
          }
          onClick={() => setOpen(false)}
        />
        <div className='mobile-navigation__menu-content'>
          <ul className='mobile-navigation__navigation'>
            <li className='mobile-navigation__navigation-item'>
              <Link href='/#features-section' onClick={toggleOpen}>
                <a className='mobile-navigation__navigation-link' onClick={toggleOpen}>
                  {content.home.nav.item1}
                </a>
              </Link>
            </li>
            <li className='mobile-navigation__navigation-item'>
              <Link href='/#how-it-works-section' onClick={toggleOpen}>
                <a className='mobile-navigation__navigation-link' onClick={toggleOpen}>
                  {content.home.nav.item2}
                </a>
              </Link>
            </li>
            <li className='mobile-navigation__navigation-item'>
              <Link href='/#present-section' onClick={toggleOpen}>
                <a className='mobile-navigation__navigation-link' onClick={toggleOpen}>
                  {content.home.nav.item3}
                </a>
              </Link>
            </li>
            <li className='mobile-navigation__navigation-item'>
              <Link href='/#about-us-section' onClick={toggleOpen}>
                <a className='mobile-navigation__navigation-link' onClick={toggleOpen}>
                  {content.home.nav.item4}
                </a>
              </Link>
            </li>
          </ul>
          <Link href='/#when-it-starts-section'>
            <KfiButton
              type='link'
              style={{ marginTop: '1rem', marginBottom: '3.5rem' }}
              onClick={toggleOpen}
            >
              {content.home.button}
            </KfiButton>
          </Link>
          <MediaButtons direction='horizontal' />
          <div className='mobile-navigation__privacy-policy'>
            <Link href='/datenschutz' onClick={toggleOpen}>
              <Typography.Link>Datenschutzerklärung</Typography.Link>
            </Link>
            <Link href='/impressum' onClick={toggleOpen}>
              <Typography.Link>Impressum</Typography.Link>
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PersonViewModal;
