import React, { Component } from 'react';
import request from 'request';
import FormContact from './components/Form';
import List from './components/List';


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts : []
    };
  }

  componentDidMount() {
    request('http://localhost:8083/', (error, response, body) => {
      if(error) {console.log(error)}
      console.log(body);
      if (body) {
        this.setState({
          contacts: JSON.parse(body)
        });
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>API CONTACTS</h1>
        <h2>Créer un contact</h2>
        <FormContact/>
        <h2>Liste des contacts</h2>
        <List contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
