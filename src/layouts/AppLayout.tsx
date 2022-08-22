import { Grid } from 'antd';
import type { ReactNode } from 'react';
import React from 'react';

import MediaButtons from '@/components/MediaButtons';
import MobileNavigation from '@/components/MobileNavigation';

import Footer from './Footer';
import Header from './Header';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const abc = Grid.useBreakpoint();

  const isMobile = !abc['md'];
  console.log(abc);
  return (
    <div>
      {!isMobile && <MediaButtons isSticky direction='vertical' />}
      {isMobile ? <MobileNavigation /> : <Header />}
      <main style={{ position: 'relative' }}>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
