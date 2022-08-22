import { MailOutlined } from '@ant-design/icons';
import type { ModalProps } from 'antd';
import { Button, Col, Modal, Row, Typography } from 'antd';
import React from 'react';

import type { Person } from '@/types';

export interface PersonViewModalProps extends ModalProps {
  img: string;
  person: Person;
  onClose: () => void;
}

const PersonViewModal: React.FC<PersonViewModalProps> = ({ img, onClose, person, ...props }) => {
  return (
    <Modal {...props} className='person-view'>
      <Row>
        <Col span={14} className='person-view__image'></Col>
        <Col span={10} className='person-view__description'>
          <Button
            className='person-view__close-button'
            icon={<img src={img} alt='close icon' className='person-view__delete-icon' />}
            onClick={onClose}
          />
          <div className='person-view__content'>
            {person.description?.map((paragraph, index) => (
              <p
                key={index}
                dangerouslySetInnerHTML={{
                  __html: paragraph || '',
                }}
              ></p>
            ))}
            <div className='person-view__email'>
              <MailOutlined className='person-view__email-icon' />
              <Typography.Text className='person-view__paragraph'>{person.email}</Typography.Text>
            </div>
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default PersonViewModal;
