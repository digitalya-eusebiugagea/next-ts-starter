import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import cx from 'classnames';
import React from 'react';

interface MediaButtonsProps {
  direction: 'horizontal' | 'vertical';
  isSticky?: boolean;
}

const MediaButtons: React.FC<MediaButtonsProps> = ({ direction, isSticky = false, ...props }) => {
  const classes = cx('media-buttons', {
    'media-buttons--is-sticky': isSticky,
    'media-buttons--direction-horizontal': direction === 'horizontal',
    'media-buttons--direction-vertical': direction === 'vertical',
  });

  return (
    <div className={classes} {...props}>
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
