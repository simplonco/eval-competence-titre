import React, { Component } from 'react';

class List extends Component {
  render() {
    const contacts = this.props.contacts.map(contact =>
      <li>{contact.prenom}, {contact.nom} - {contact.titre} chez {contact.entreprise}</li>
    );

    return (
      <ul>
        {contacts}
      </ul>
    );
  }
}

export default List;
