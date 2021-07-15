import React from 'react';
import { NavLink } from 'react-router-dom';

import './styled.scss';

function GnbContainer() {
  return (
    <nav role="navigation">
      <h1>

      </h1>
      <ul>
        <li>
          <NavLink exact to={ '/' }>홈</NavLink>
        </li>
        <li>

        </li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
}

export default GnbContainer;
