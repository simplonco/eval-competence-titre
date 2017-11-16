import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <div className="form">
        <form action="http://localhost:3005/add" method="POST">
          <input name = "titre" placeholder="titre"/>
          <input name = "auteur" placeholder="auteur"/>
          <input name = "annee_de_publication" placeholder="année de publication"/>
          <input name = "pages" placeholder="nombre de pages"/>
          <input name = "date_de_creation" placeholder="date de création"/>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
  }

}

export default Form;
