import React from 'react';

import AboutUsSection from '@/components/AboutUsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import IntroSection from '@/components/IntroSection';
import PresentSection from '@/components/PresentSection';
import WhenItStartsSection from '@/components/WhenItStartsSection';
import AppLayout from '@/layouts/AppLayout';

const Index = () => {
  return (
    <AppLayout>
      {/* <h1>Home</h1> */}
      <IntroSection />
      {/* <FeaturesSection /> */}
      <HowItWorksSection />
      <PresentSection />
      <WhenItStartsSection />
      <AboutUsSection />
    </AppLayout>
  );
};

export default Index;
