import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './App';
import Home from './containers/Home';
import About from './containers/About';
import Posts from './containers/Posts';

import './index.css';

/*
  Router: 라우터의 속성을 정의하고, 내부에 Route 설정을 함.
  Route: 설정한 경로에 따라 어떤 Component를 렌더링 할 지 정하는 Component
  IndexRoute: 초기 Route 설정
  browserHistory: HTML5의 History API를 사용하여 브라우저의 URL 변화를 주시하고, 조작함.
*/
ReactDOM.render(
  <Router history = {browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="posts" component={Posts}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
