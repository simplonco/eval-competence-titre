import React, { Component } from 'react';
import { Input, Button, Form } from 'muicss/react';
import "./Form.css";

class FormContact extends Component {

  render() {
    return (
      <Form action="http://localhost:8083/add" method="POST">
            <Input type="text" name="nom" hint="Nom du contact"/>
            <Input type="text" name="prenom" hint="Prenom du contact"/>
            <Input type="text" name="titre" hint="Titre du contact"/>
            <Input type="text" name="entreprise" hint="Entreprise du contact"/>
            <Input type="text" name="email" hint="Mail du contact"/>
            <Input type="text" name="adresse" hint="Adresse du contact"/>
            <Input type="text" name="mobile" hint="Portable du contact"/>
            <Input type="text" name="fixe" hint="Fixe du contact"/>
            <Button variant="raised">Ajouter votre contact</Button>
      </Form>
 
    );
  }

}

export default FormContact;