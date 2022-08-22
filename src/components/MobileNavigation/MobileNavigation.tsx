import { MenuOutlined } from '@ant-design/icons';
import { Button, Modal, PageHeader, Typography } from 'antd';
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
              <a href='#' className='mobile-navigation__navigation-link'>
                {content.home.nav.item1}
              </a>
            </li>
            <li className='mobile-navigation__navigation-item'>
              <a
                href='#how-it-works-section'
                className='mobile-navigation__navigation-link'
                onClick={toggleOpen}
              >
                {content.home.nav.item2}
              </a>
            </li>
            <li className='mobile-navigation__navigation-item'>
              <a href='#' className='mobile-navigation__navigation-link'>
                {content.home.nav.item3}
              </a>
            </li>
            <li className='mobile-navigation__navigation-item'>
              <a href='#' className='mobile-navigation__navigation-link'>
                {content.home.nav.item4}
              </a>
            </li>
          </ul>
          <KfiButton type='primary' style={{ marginTop: '1rem', marginBottom: '3.5rem' }}>
            {content.home.button}
          </KfiButton>
          <MediaButtons direction='horizontal' />
          <Typography.Link className='mobile-navigation__privacy-policy'>
            Datenschutzerklärung
            <br />
            Impressum
          </Typography.Link>
        </div>
      </Modal>
    </>
  );
};

export default PersonViewModal;
