import React, { Component } from 'react';

import catImg from '../images/catDefaultImg.jpg';
import dogImg from '../images/dogDefaultImg.jpg';

import '../stylesheets/List.css';

class List extends Component {
  render() {
    let petImg = (pet) => {
      if (pet.species === 'Chat') return catImg;
      else return dogImg;
    } // Affiche la photo envoyée dans le formulaire s'il y en a une, sinon affiche un avatar de chat ou de chien par default selon l'animal.

    const pets = this.props.pets.map(pet =>
      <div className="Card">
        <a className="close" href={`http://localhost:3005/listeContact/${pet._id}/delete`}>x</a>
        <div className="Card-img">
          <img src={petImg(pet)}/>
        </div>
        <div className="Card-info">
          <h1 className="Card-info-name">{pet.name}</h1>
          <p>{pet.species} {pet.breed} - {pet.age}, {pet.sex}</p>
          <p>{pet.department} - {pet.city}</p>
        </div>
      </div>
    );

    return (
      <div className="List">
        {pets}
      </div>
    );
  }
}

export default List;
