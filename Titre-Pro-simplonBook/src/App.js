import React, { Component } from 'react';
import request from 'request';
import Bibliotheque from './components/Bibliotheque';
import './App.css';

class App extends Component {

state = {
  books: []
}

componentDidMount() {
  request('http://localhost:3005/', (err, res, body) => {
    if (err) return console.log(err);
    if (body) {
      this.setState({
        books: JSON.parse(body)
      });
    }
  })
}

  render() {
    return (
      <div className="container-fluid">
        {/* accueil */}
        <div className="header text-center">
          <h1>BIEVENUE DANS NOTRE BIBLIOTHEQUE</h1>
          <h3>Ajoutez vos livres dans la bibliothèque et venez les consulter quand
            vous le voulez !</h3>
        </div>
        {/* livres */}
        <div className="livres">
          <Bibliotheque displayBooks={this.state.books}/>
        </div>
      </div>
    );
  }
}

export default App;
