import { Grid } from 'antd';
import type { ReactNode } from 'react';
import React from 'react';

import MediaButtons from '@/components/MediaButtons';

import Footer from '../Footer';
import Header from '../Header';
import MobileNavigation from '../MobileNavigation';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const currentBreakpoint = Grid.useBreakpoint();

  const isMobile = currentBreakpoint['xs'] || !currentBreakpoint['lg'];
  // console.log(currentBreakpoint);

  return (
    <div>
      {!isMobile && <MediaButtons isSticky direction='vertical' />}
      {isMobile ? <MobileNavigation /> : <Header />}
      <main className='app-layout__container'>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
