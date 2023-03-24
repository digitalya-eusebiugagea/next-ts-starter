import React from 'react';

import Main from '@/layouts/Main';
import Meta from '@/layouts/Meta';
import { WebConfig } from '@/utils/WebConfig';

function Index() {
  return (
    <Main meta={<Meta title={WebConfig.title} description={WebConfig.description} />}>
      <h1>Hello</h1>
    </Main>
  );
}

export default Index;
