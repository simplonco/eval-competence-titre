import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <h1>Ajouter un contact</h1>
        <form action="http://localhost:3012/listeContact/add" method="POST">
          <label>Nom :</label>
          <input type="text" name="nom"/><br/>
          <label> Prénom :</label>
          <input type="text" name="prenom"/><br/>
          <label> Titre :</label>
          <input type="text" name="titre"/><br/>
          <label> Entreprise :</label>
          <input type="text" name="entreprise"/><br/>
          <label>Email :</label>
          <input type="email" name="email"/><br/>
          <label> Adresse :</label>
          <input type="text" name="adresse"/><br/>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
  }
}

export default Form;
