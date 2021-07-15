import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

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
});
