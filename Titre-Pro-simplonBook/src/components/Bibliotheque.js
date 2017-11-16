import React, { Component } from 'react';
import Form from './Form';
import DeleteButton from './DeleteButton';
import EditForm from './EditForm';

class Bibliotheque extends Component {
  state = {
        displayForm: false
    }

  handleDisplay = () => {
    this.setState({
            displayForm: this.state.displayForm ? false : true
    })
  }

  render() {
        const displayer = {
            "display": this.state.displayForm ? "inline" : "none"
        }
    return (
      <div className="container-fluid">
        <Form />
        <h2>VOS LIVRES:</h2>
        <ul className="d-flex flex-wrap">
          {this.props.displayBooks.map((book, index) =>
            <li key={index} className="col-md-3 liste-item">
              <p><span className="infos">Titre:</span> {book.titre}</p>
              <p><span className="infos">Auteur:</span> {book.auteur}</p>
              <p><span className="infos">Année de publication:</span> {book.annee_de_publication}</p>
              <p><span className="infos">Nombre de pages:</span> {book.pages}</p>
              <p><span className="infos">Date de création:</span> {book.date_de_creation}</p>
              <button type="submit" className="btn btn-light btn-sm" onClick={() => this.handleDisplay()}>Modifier</button>
              <div style={displayer}>
                <EditForm id={book._id}/>
              </div>
              <DeleteButton id={book._id}/>
          </li>
          )}
        </ul>
      </div>
    );
  }

}

export default Bibliotheque;
