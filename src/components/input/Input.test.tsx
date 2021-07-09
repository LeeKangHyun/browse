import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import Input from '.';

describe('Input', () => {
  let spy: unknown;
  beforeEach(() => {
    spy = jest.spyOn(React, 'useState');

    console.log(spy);
  });

  afterEach(cleanup);

  test('Input render', () => {
    const { getByTestId } = render(<Input name="keyword" value={ 0 } onChange={ () => {} } />);

    const element = getByTestId('input') as HTMLInputElement;

    fireEvent.change(
      element,
      {
        target: {
          value: 'Hello World!!',
        },
      },
    );

    expect(element.value).toBe('Hello World!!');
  });
});
