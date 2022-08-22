import React from 'react';

import AboutUsSection from '@/components/AboutUsSection';
import FeaturesSection from '@/components/FeaturesSection';
import Header from '@/components/Header';
import HowItWorksSection from '@/components/HowItWorksSection';
import IntroSection from '@/components/IntroSection';
import MediaButtons from '@/components/MediaButtons';
import PresentSection from '@/components/PresentSection';
import WhenItStartsSection from '@/components/WhenItStartsSection';

const Index = () => {
  return (
    <div>
      <MediaButtons />
      <Header />
      <div style={{ position: 'relative' }}>
        <IntroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PresentSection />
        <WhenItStartsSection />
        <AboutUsSection />
      </div>
    </div>
  );
};

export default Index;
