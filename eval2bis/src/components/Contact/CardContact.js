import React, {Component} from 'react';
import {bootstrap, Button} from 'react-bootstrap';

import Animate from 'animate.css';

class CardContact extends Component {

    state = {
        contacts: []
    }

    componentDidMount() {
        fetch('http://localhost:3016')
            .then(res => res.json())
            .then(body => {
                this.setState({
                    contacts: body
                })
            })
            .catch(err => {
                throw err
            })
    }

render() {
    return (

<div className="alignContactsDiv row">{this.state.contacts.map(item => {
    return  <div className="cardContactDiv animated slideInLeft col-md-2" key={item._id}>
                <ul className="listContacts">
                    <li className="titleContact">{item.nom}</li>
                    <li className="dateContact">({item.prenom})</li>
                    <li className="authorContact">{item.titre}</li>
                    <li className="pagesContact">{item.entreprise} pages</li>
                    <li className="pagesContact">{item.adresse} pages</li>
                    <li className="pagesContact">{item.telephone} pages</li>
                </ul>
                <form className="formButton" action={`http://localhost:3016/${item._id}`} method="POST">
                    <Button className="updateButton" type="submit" bsStyle="warning">Update</Button>
                </form>
                <form action={`http://localhost:3016/delete/${item._id}`} method="POST">
                    <Button className="deleteButton" type="submit" bsStyle="danger">Delete</Button>
                </form>                
            </div>
        })}
</div>
)}
}

export default CardContact