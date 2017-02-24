import React, { Component } from 'react';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      {/*
        children : element사이의 text를 받아오거나 element의 하위 Component를 가져옴.
                   Home, About, Posts의 컴포넌트를 가져오게 됨. 
      */}
        {this.props.children}
      </div>
    );
  }
}

export default App;
