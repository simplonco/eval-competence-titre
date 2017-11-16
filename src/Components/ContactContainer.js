import React, { Component } from 'react'
import ContactForm from './ContactForm'
import ContactCard from './ContactCard'

class ContactContainer extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        fetch('http://localhost:8090/')
            .then(res => res.json())
            .then(data => this.setState({
                list: data
            }))
            .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                <h1>Contacts de Simplon</h1>
                <ContactForm route="add" />
                <div className="cardContainer">
                    {this.state.list.map(contact => {
                        return <ContactCard key={contact._id} contact={contact} />
                    })}
                </div>
            </div>
        )
    }
}

export default ContactContainer