import React from 'react';
import header from '../../assets/img/header.png';

function Header() {
  return (
      <div className="header">
        <img className="headerimg" src={header} alt="header-img"></img>
      </div>
  );
}

export default Header;