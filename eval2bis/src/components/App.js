import React, {Component} from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';

import {CardContact, FormAddContact} from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <FormAddContact/>
        <CardContact/>
      </div>
    );
  }
}

export default App;
