import { MailOutlined } from '@ant-design/icons';
import type { ModalProps } from 'antd';
import { Button, Modal, Typography } from 'antd';
import React from 'react';

import type { Person } from '@/types';
import Paragraphs from '@/ui-kit/Paragraphs';

export interface PersonViewModalProps extends ModalProps {
  img: string;
  person: Person;
  onClose: () => void;
}

const PersonViewModal: React.FC<PersonViewModalProps> = ({ img, onClose, person, ...props }) => {
  return (
    <Modal {...props} className='person-view'>
      <div className='person-view__description'>
        <Button
          className='person-view__close-button'
          icon={<img src={img} alt='close icon' className='person-view__delete-icon' />}
          onClick={onClose}
        />
        <div className='person-view__content'>
          <Paragraphs paragraphs={person.description} />
          {person.email && (
            <div className='person-view__email'>
              <MailOutlined className='person-view__email-icon' />
              <Typography.Text className='person-view__paragraph'>{person.email}</Typography.Text>
            </div>
          )}
        </div>
      </div>
      {/* <Row>
        <Col span={14} className='person-view__image'></Col>
        <Col span={10} className='person-view__description'>
          <Button
            className='person-view__close-button'
            icon={<img src={img} alt='close icon' className='person-view__delete-icon' />}
            onClick={onClose}
          />
          <div className='person-view__content'>
            <Paragraphs paragraphs={person.description} />
            {person.email && (
              <div className='person-view__email'>
                <MailOutlined className='person-view__email-icon' />
                <Typography.Text className='person-view__paragraph'>{person.email}</Typography.Text>
              </div>
            )}
          </div>
        </Col>
      </Row> */}
    </Modal>
  );
};

export default PersonViewModal;
