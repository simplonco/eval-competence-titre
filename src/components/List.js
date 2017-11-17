import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class List extends Component {
  render() {
    return (
      <div className="List">
        {this.props.contacts.map(contact =>
          <div className="List-card">
            <h4>{contact.prenom} {contact.nom}</h4>
            {contact.titre} chez {contact.entreprise} <br/>
            {contact.adresse} <br/>
            {contact.email} <br/>
            {contact.telephone.mobile} <br/>
            {contact.telephone.work} <br/>
            <a href={`http://localhost:3012/listeContact/${contact._id}/delete`}>
              <RaisedButton type="submit" label="Supprimer" secondary={true} />
            </a>
          </div>
          )}
      </div>
    )
  }
}

export default List;
