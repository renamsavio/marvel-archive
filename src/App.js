import React, { Component } from 'react';
import './App.css';
import {AccessContainer} from './containers/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AccessContainer data="whatever"/>
      </div>
    );
  }
}

export default App;