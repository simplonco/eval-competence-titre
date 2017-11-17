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
<<<<<<< HEAD
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
=======
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
>>>>>>> 42148c12d50408a19192682bc2a51c949684c3c0
        </form>
      </div>
    );
  }

}

export default Form;
