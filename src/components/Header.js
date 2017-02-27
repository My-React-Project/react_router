import React from 'react';
import { Link } from 'react-router';
import './Header.css';

const MenuItem = ({active, children, to}) => (
  /*
    Link : 페이지를 새로 로딩할 필요 없이 지정된 Component를 보여줄때 사용
    여러개의 Class를 추가할 경우 ` `를 이용하여 추가 (ES6 문법)
  */
  <Link to={to} className={`menu-item ${active ? 'active' : ''}`}>
    {children}
  </Link>
)

const Header = (props, context) => {
  const { router } = context;
  return (
    <div>
      <div className="logo">
        jaewoong
      </div>
      <div className="menu">
        {/*
             active : 현재 브라우저의 경로와 주어진 경로와 매칭이 되는지 확인 하는 props
        */}
        <MenuItem to={'/'} active={router.isActive('/', true)}>Home</MenuItem>
        <MenuItem to={'/about'} active={router.isActive('/about', true)}>About</MenuItem>
        <MenuItem to={'/posts'} active={router.isActive('/posts', true)}>Posts</MenuItem>
      </div>
    </div>
  );
};
// Class를 이용한 Header Component 정의
// class Header extends React.Component {
//     render() {
//         let router = this.context.router;
//         return (
//             <div>
//               <div className="logo">
//                 jaewoong
//               </div>
//               <div className="menu">
//                 {/*
//                      active : 현재 브라우저의 경로와 주어진 경로와 매칭이 되는지 확인 하는 props
//                 */}
//                 <MenuItem to={'/'} active={router.isActive('/', true)}>Home</MenuItem>
//                 <MenuItem to={'/about'} active={router.isActive('/about', true)}>About</MenuItem>
//                 <MenuItem to={'/posts'} active={router.isActive('/posts', true)}>Posts</MenuItem>
//               </div>
//             </div>
//         );
//     }
// }

// 컴포넌트의 context 객체의 router 에 접근을 하기 위한 설정
Header.contextTypes = {
  router : React.PropTypes.object
}

export default Header;
