import React, { ChangeEvent, useState } from 'react';

import Input from '@browse/components/input';

function Main() {
  const [keyword, setKeyword] = useState('');

  function onChange(evt: ChangeEvent<HTMLInputElement>) {
    const { value } = evt.target;

    setKeyword(value);
  }

  return (
    <main role="main" data-testid="app">
      <h1>Hello World!</h1>
      <Input value={ keyword } name="keyword" onChange={ onChange } />
    </main>
  );
}

export default Main;
