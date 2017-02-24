import React from 'react';
import { Link } from 'react-router';
import './Header.css';

const MenuItem = ({active, children, to}) => (
  <div className="menu-item">
    {children}
  </div>
)

const Header = () => {
  return (
    <div>
      <div className="logo">
        jaewoong
      </div>
      <div className="menu">
        <MenuItem>Home</MenuItem>
        <MenuItem>Intro</MenuItem>
        <MenuItem>Posts</MenuItem>
      </div>
    </div>
  );
};

export default Header;
