import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Form from './Form';
import List from './List';

import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    let contactsUrl = 'http://localhost:3012/listeContact';

    fetch(contactsUrl)
      .then(res => res.json())
      .then(result => {
        this.setState({
          contacts: result
        })
      })
      .catch((res, err) => res.send(err));
  }

  render() {
    return (
      <MuiThemeProvider className="App">
        <Form />
        <List contacts={this.state.contacts}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
