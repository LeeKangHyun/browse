import React, { ChangeEvent, useState } from 'react';

import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';

import Input from '.';

describe('', () => {
  test('callback', async () => {
    const onChange = jest.fn();

    render(<Input name="keyword" value="" onChange={ onChange } />);

    await userEvent.type(screen.getByTestId('input'), 'JavaScript');

    expect(onChange).toHaveBeenCalledTimes(10);
  });
});

describe('Input', () => {
  beforeEach(() => {
    const Wrapper = () => {
      const [value, setValue] = useState('');

      function onChange(evt: ChangeEvent<HTMLInputElement>) {
        const { value } = evt.target;

        setValue(value);
      }

      return <Input name="keyword" value={ value } onChange={ onChange } />;
    };
    render(<Wrapper />);
  });

  test('Input render', () => {
    const element = screen.getByTestId('input');

    expect(element).toBeInTheDocument();
  });

  test('Input Change value', () => {
    const element = screen.getByTestId('input') as HTMLInputElement;

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
