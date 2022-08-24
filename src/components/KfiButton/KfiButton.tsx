import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import cx from 'classnames';
import React from 'react';

const KfiButton: React.FC<ButtonProps> = ({ className, children, type = 'default', ...props }) => {
  const classes = cx(`kfi-button ${className}`, {
    'kfi-button--primary': type === 'default',
    'kfi-button--secondary': type === 'primary' || type === 'link',
  });

  return (
    <Button className={classes} {...props}>
      {children}
    </Button>
  );
};

export default KfiButton;
