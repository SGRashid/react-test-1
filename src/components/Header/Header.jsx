import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className='menu'>
      <Link className='main-menu white bold' to='/'>
        Главная
      </Link>
    </div>
  );
};

export default Header;
