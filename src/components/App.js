import React, { Component } from 'react';
import request from 'request';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../stylesheets/App.css';

// Components
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    let url = 'http://localhost:3011/simplonBook';

    fetch(url)
    .then(res => res.json())
    .then(result => {
      this.setState({
        books: result
      })
    })
    .catch((res, err) => {
      res.send(err);
    });

    // request(url, (err, res, body) => {
    //   console.log(body);
    //   if (err) throw err;
    //   this.setState({
    //     books: JSON.parse(body)
    //   });
    // });
  }


  render() {
    const books = this.state.books.map(book =>
      <li>{book.titre}, {book.auteur}, {book.annee_de_publication}, {book.pages} pages</li>
    );

    return (
      <App>
        <Form/>
        <ul>{books}</ul>
      </App>
    );
  }
}

export default App;
