import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(cleanup);

  test('App render', () => {
    // given
    const element = screen.getByTestId('app');

    // then
    expect(element).toBeInTheDocument();
  });

  test('fireEvent', () => {
    // given
    const element = screen.getByTestId('input') as HTMLInputElement;

    // when
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
