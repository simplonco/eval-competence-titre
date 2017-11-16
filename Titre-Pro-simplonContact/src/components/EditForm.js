import React, { Component } from 'react';

class EditForm extends Component {

  render() {
    return (
      <div className="container-fluid editForm">
        <form action={`http://localhost:3005/${this.props.id}/update`} method="POST" className="">
          <div>
            <input className="form-control" name="nom" placeholder="Nom"/>
            <input className="form-control" name="prenom" placeholder="Prénom"/>
            <input className="form-control" name="titre" placeholder="Poste"/>
            <input className="form-control" name="entreprise" placeholder="Entreprise"/>
          </div>
          <div>
            <input className="form-control" name="email" placeholder="Adresse mail"/>
            <input className="form-control" name="adresse" placeholder="Adresse"/>
            <input className="form-control" name="telephone.mobile" placeholder="Contact Perso"/>
            <input className="form-control" name="telephone.work" placeholder="Contact Pro"/>
          </div>
          <button type="submit" className="btn btn-light">Modifier</button>
        </form>
      </div>
    );
  }

}

export default EditForm;
