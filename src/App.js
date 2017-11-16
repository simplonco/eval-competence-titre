import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookContainer from './Components/BookContainer'
import ContactContainer from './Components/ContactContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">App name</h1>
        </header>
        <BookContainer />
        <ContactContainer />
      </div>
    );
  }
}

export default App;
