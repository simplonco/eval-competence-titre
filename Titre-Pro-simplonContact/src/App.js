import React, { Component } from 'react';
import './App.css';
import request from 'request';
import Contacts from './components/Contacts';

class App extends Component {
state = {
  contacts: [],
}

componentDidMount() {
  request('http://localhost:3005/', (err, res, body) => {
    if (err) return console.log(err)
    if (body) {
      this.setState({
        contacts: JSON.parse(body)
      });
    }
  })
}

  render() {
    return (
      <div className="container-fluid bg-dark">
        {/* header */}
        <div className="header text-center">
          <h1>BIENVENUE SUR VOTRE ANNUAIRE PERSONNALISE</h1>
          <h2>Créez votre propre liste de contacts</h2>
        </div>
        {/* contacts */}
        <div className="contacts">
          <Contacts displayContacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}

export default App;
