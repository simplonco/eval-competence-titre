import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species: 'Chat',
      age: 'Adulte',
      sex: 'Mâle',
      affectionate: false,
      quiet: false,
      playful: false
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value })
  }

  toggle = (event) => {
    const name = event.target.name;
    this.setState({ [name]: !this.state.name })
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  // }

  render() {
    return (
      <div className="Form">
        <h1>Ajouter un contact</h1>
        <form action="http://localhost:3012/listeContact/add" method="POST" encType="multipart/form-data">
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
          <label> Adress :</label>
          <input type="text" name="adresse"/><br/>
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    );
  }

}

export default Form;
