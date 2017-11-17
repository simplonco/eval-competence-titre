import React, { Component } from 'react';

// Material-ui
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 7,
};

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <h2 className="Form-title">Ajouter un contact</h2>
        <form action="http://localhost:3012/listeContact/add" method="POST">
          <TextField hintText="Nom" name="nom" style={style} />
          <TextField hintText="Entreprise" name="entreprise" style={style} /><br/>
          <TextField hintText="Prénom" name="prenom" style={style} />
          <TextField hintText="Fonction" name="titre" style={style} /><br/>
          <TextField hintText="Téléphone mobile" name="telephone.mobile" style={style} />
          <TextField hintText="Téléphone professionnel" name="telephone.work" style={style} /><br/>
          <TextField hintText="Adresse et ville" name="adresse" style={style} />
          <TextField hintText="Email" type="email" name="email" style={style} /><br/>
          <RaisedButton type="submit" label="Ajouter" primary={true} />
        </form>
      </div>
    );
  }

}

export default Form;
