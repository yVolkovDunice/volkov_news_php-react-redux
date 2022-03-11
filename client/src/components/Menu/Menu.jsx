import React from 'react';

import Search from '../Search/Search';
import AuthNavigation from '../AuthNavigation/AuthNavigation';

import './styles.css';

function Menu() {
  return (
    <div className="menu">
      <Search />
      <AuthNavigation />
    </div>
  );
}

export default Menu;
