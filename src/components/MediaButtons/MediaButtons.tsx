import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

const MediaButtons = () => {
  return (
    <div className='media-buttons'>
      <Button
        shape='circle'
        icon={<LinkedinFilled color='black' />}
        size='large'
        className='media-buttons__btn'
      />
      <Button
        shape='circle'
        icon={<TwitterOutlined />}
        size='large'
        className='media-buttons__btn'
      />
      <Button
        shape='circle'
        icon={<InstagramFilled />}
        size='large'
        className='media-buttons__btn'
      />
      <Button
        shape='circle'
        icon={<FacebookFilled />}
        size='large'
        className='media-buttons__btn'
      />
    </div>
  );
};

export default MediaButtons;
