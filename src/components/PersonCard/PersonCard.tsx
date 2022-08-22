import { Card, Typography } from 'antd';
import React, { useState } from 'react';

import type { Person } from '@/types';

import PersonViewModal from '../PersonViewModal';

interface PersonCardProps {
  person: Person;
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className='person-card' onClick={() => setOpen(true)}>
        <Typography.Text className='person-card__name'>{person.name}</Typography.Text>
        <Typography.Text className='person-card__role'>{person.role}</Typography.Text>
        <Typography.Text className='person-card__email'>{person.email}</Typography.Text>
      </Card>
      <PersonViewModal
        visible={open}
        img='/assets/images/ic-close.png'
        person={person}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default PersonCard;
