import React from 'react';

import { Gnb } from '@browse/container';

const TEST_ID = 'app';

function Main() {
  return (
    <main role="main" data-testid={ TEST_ID }>
      <Gnb />
    </main>
  );
}

export default Main;
