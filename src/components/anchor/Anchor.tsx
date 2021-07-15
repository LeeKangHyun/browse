import React from 'react';
import { Link } from 'react-router-dom';

interface Props {

}

const defaultProps = {
  to: '/',
};

function AnchorComponent({ to }: Props & typeof defaultProps) {
  return (
    <Link to={ to } />
  );
}

AnchorComponent.defaultProps = defaultProps;

export default AnchorComponent;
