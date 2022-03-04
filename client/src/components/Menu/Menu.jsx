import React from 'react';

import Search from '../Search/Search';
import Sing from '../Sing/Sing';

import './styles.css';

function Menu() {
  return (
    <div className="menu">
      <Search />
      <Sing />
    </div>
  );
}

export default Menu;
