import React from 'react';

import Hello from '@/components/Hello';
import Main from '@/layouts/Main';
import Meta from '@/layouts/Meta';
import { WebConfig } from '@/utils/WebConfig';

function Index() {
  return (
    <Main meta={<Meta title={WebConfig.title} description={WebConfig.description} />}>
      <Hello />
    </Main>
  );
}

export default Index;
