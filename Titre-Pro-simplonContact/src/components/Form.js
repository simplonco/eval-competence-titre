import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <div>
        <form action="http://localhost:3005/add" method="POST" className="d-flex col-md-8">
          <input className="col-md-4 form-control" name="nom" placeholder="Nom"/>
          <input className="col-md-4 form-control" name="prenom" placeholder="Prénom"/>
          <input className="col-md-4 form-control" name="titre" placeholder="Poste"/>
          <input className="col-md-4 form-control" name="entreprise" placeholder="Entreprise"/>
          <input className="col-md-4 form-control" name="email" placeholder="Adresse mail"/>
          <input className="col-md-4 form-control" name="adresse" placeholder="Adresse"/>
          <input className="col-md-4 form-control" name="telephone.mobile" placeholder="Contact Perso"/>
          <input className="col-md-4 form-control" name="telephone.work" placeholder="Contact Pro"/>
          <button type="submit" className="btn btn-secondary">Ajouter</button>
        </form>
      </div>
    );
  }

}

export default Form;
