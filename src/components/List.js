import React, { Component } from 'react';
import Button from './Button';


import './List.css';


class List extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.contacts.map((contact, index) =>
            <ul key={index}><b>Nom :</b> {contact.nom} <b>- Prenom :</b> {contact.prenom} <b>- Titre :</b> {contact.titre} <b>- Entreprise :</b> {contact.entreprise} <b>- MAIL :</b> {contact.email} <b>- Adresse :</b> {contact.adresse} <b>-
            Mobile :</b> {contact.mobile} <b>- Fixe :</b> {contact.fixe}
              <br/>
              <Button id={contact._id}/>
            </ul>
          )}
        </ul>
      </div>
    );
  }

}

export default List ;