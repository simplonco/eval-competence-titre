import React, { Component } from 'react';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';

class Form extends Component {

  render() {
    return (
      <div className="Form">
        <form action="http://localhost:3011/simplonBook/add" method="POST">
          <input type="text" name="titre" /><br/>
          <input type="text" name="auteur"/><br/>
          <input type="text" name="annee_de_publication" /><br/>
          <input type="text" name="pages" /><br/>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }

}

export default Form;
