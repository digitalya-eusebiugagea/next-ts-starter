import React, { useState } from 'react';

import content from '@/content.json';
import type { Person } from '@/types';

import PersonViewModal from '../PersonViewModal';

const AboutUsSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className='about-us-section'>
      <div className='about-us-section__banner' />
      <PersonViewModal
        visible={open}
        img='/assets/images/ic-close.png'
        person={content.home.aboutUsSection.people[0] as Person}
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default AboutUsSection;
