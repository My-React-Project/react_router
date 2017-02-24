import React from 'react';
import { Link } from 'react-router';
import './Header.css';

const MenuItem = ({active, children, to}) => (
  /*
    Link : 페이지를 새로 로딩할 필요 없이 지정된 Component를 보여줄때 사용
  */
  <Link to={to} className="menu-item">
    {children}
  </Link>
)

const Header = () => {
  return (
    <div>
      <div className="logo">
        jaewoong
      </div>
      <div className="menu">
        <MenuItem to={'/'}>Home</MenuItem>
        <MenuItem to={'/about'}>About</MenuItem>
        <MenuItem to={'/posts'}>Posts</MenuItem>
      </div>
    </div>
  );
};

export default Header;
