import React, { Component } from 'react';
import Form from './Form';
import DeleteButton from './DeleteButton';
import EditForm from './EditForm';

class Contacts extends Component {
  state = {
          formToggle: false
      }
 handleDisplay = () => {
    this.setState({
            formToggle: this.state.formToggle ? false : true
    })
  }

  render() {
        const displayer = {
            "display": this.state.formToggle ? "inline" : "none"
        }

    return (
      <div className="container-fluid d-flex flex-column">
        {/* formulaire */}
        <div className="formulaire col-md-6">
          <Form />
        </div>
        {/* contacts */}
        <div className="container-fluid">
          <h2>VOS CONTACTS:</h2>
          <ul className="d-flex flex-wrap">
            {this.props.displayContacts.map((contact, index) =>
              <li key={index} className="col-md-4 d-flex flex-column justify-content-around align-items-baseline">
                <p><span className="infos text-secondary">Nom:</span> {contact.nom}</p>
                <p><span className="infos text-secondary">Prénom:</span> {contact.prenom}</p>
                <p><span className="infos text-secondary">Poste:</span> {contact.titre}</p>
                <p><span className="infos text-secondary">Entreprise:</span> {contact.entreprise}</p>
                <p><span className="infos text-secondary">Email:</span> {contact.email}</p>
                <p><span className="infos text-secondary">Adresse:</span> {contact.adresse}</p>
                {contact.telephone.work && <p><span className="infos text-secondary">Contact pro:</span> {contact.telephone.work}</p>}
                {contact.telephone.mobile && <p><span className="infos text-secondary">Contact perso:</span> {contact.telephone.mobile}</p>}
                <div className="d-flex">
                  <div className="edit-button">
                      <button type="submit" className="btn btn-light btn-sm" onClick={() => this.handleDisplay()}>Modifier</button>
                  </div>
                  <div style={displayer}>
                    <EditForm id={contact._id}/>
                  </div>
                  <DeleteButton id={contact._id}/>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }

}

export default Contacts;
