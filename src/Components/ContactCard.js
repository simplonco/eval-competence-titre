import React, { Component } from 'react'
import ContactForm from './ContactForm'

class ContactCard extends Component {
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

        return(
            <div className="contactCard">
                <div>
                    <span>{this.props.contact.prénom} {this.props.contact.nom}</span>
                    <button onClick={() => this.handleDisplay()} className="btn btn-primary editer">E</button>
                    <a href={`http://localhost:8090/delete/${this.props.contact._id}`}><button className="deleter btn btn-danger">X</button></a>
                    <br></br><span>Activités: {this.props.contact.titre} at {this.props.contact.entreprise}</span>
                    <br></br><span>Contact: {this.props.contact.email}.</span>
                    <br></br><span>Location: {this.props.contact.adresse}. Fixe et mobile: {this.props.contact.telephone.work} / {this.props.contact.telephone.mobile}.</span>
                </div>
                <div style={displayer}>
                    <ContactForm route={`update/${this.props.contact._id}`} contact={this.props.contact} />
                </div>
            </div>
        )
    }
}

export default ContactCard