import React, { Component } from 'react'

class ContactForm extends Component {

    render() {
        return(
            <form action={`http://localhost:8090/${this.props.route}`} method="POST">
                <input type="text" name="prénom" placeholder="prénom" defaultValue={this.props.contact && this.props.contact.prénom}/>
                <input type="text" name="nom" placeholder="nom" defaultValue={this.props.contact && this.props.contact.nom}/>
                <input type="text" name="titre" placeholder="travail" defaultValue={this.props.contact && this.props.contact.titre}/>
                <input type="text" name="entreprise" placeholder="entreprise" defaultValue={this.props.contact && this.props.contact.entreprise}/>
                <input type="text" name="email" placeholder="email" defaultValue={this.props.contact && this.props.contact.email}/>
                <input type="text" name="adresse" placeholder="adresse" defaultValue={this.props.contact && this.props.contact.adresse}/>
                <input type="text" name="work" placeholder="work phonenumber" defaultValue={this.props.contact && this.props.contact.telephone.work}/>
                <input type="text" name="mobile" placeholder="mobile phonenumber" defaultValue={this.props.contact && this.props.contact.telephone.mobile}/>
                <button type="submit" className="btn btn-primary">{this.props.route === "add" ? "Ajouter" : "Modifier"} Contact</button>
            </form>
        )
    }
}

export default ContactForm