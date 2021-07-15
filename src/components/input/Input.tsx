import React, { ChangeEvent } from 'react';

import { Input } from './styled';

interface Props {
  name: string;
  value: any;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

const defaultProps = {
  type: 'text',
};

function InputComponent({ type, value, name, onChange }: Props & typeof defaultProps) {
  return (
    <Input value={ value } name={ name } type={ type } onChange={ onChange } />
  );
}

InputComponent.defaultProps = defaultProps;

export default InputComponent;
