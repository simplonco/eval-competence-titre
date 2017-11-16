import React, {Component} from 'react';
import {bootstrap, Button, FormControl, ControlLabel} from 'react-bootstrap';
import Animate from 'animate.css';

class FormAddContact extends Component {
    render() {
        return (
                <div className="formDiv animated slideInDown">
                    <form method="POST" action="http://localhost:3016/add">
                        <ControlLabel>Nom</ControlLabel>
                        <FormControl type="text" name="nom" placeholder="Wick"></FormControl><br/>
                        <ControlLabel>Prenom</ControlLabel>
                        <FormControl type="text" name="prenom" placeholder="John"></FormControl><br/>
                        <ControlLabel>Titre</ControlLabel>
                        <FormControl type="text" name="titre" placeholder="Assassin"></FormControl><br/>
                        <ControlLabel>Entreprise</ControlLabel>
                        <FormControl type="text" name="entreprise" placeholder="Confidential"></FormControl><br/>                                              
                        <ControlLabel>Adresse</ControlLabel>
                        <FormControl type="text" name="adresse" placeholder="Confidential"></FormControl><br/>                        
                        <ControlLabel>Telephone</ControlLabel>
                        <FormControl type="text" name="telephone" placeholder="Confidential"></FormControl><br/>
                        <Button className="formDeleteButton" bsStyle="info" type="submit">ADD</Button>
                    </form>
                </div>
            );
        }
    }
    
export default FormAddContact;