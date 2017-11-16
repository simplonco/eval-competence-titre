import React, { Component } from 'react';


class Button extends Component {

  render() {
    return (
      <div className="deleteButton">
        <form action={`http://localhost:8083/${this.props.id}/delete`} method="POST">
          <button type="submit">Supprimer le contact</button>
        </form>
      </div>
    );
  }

}

export default Button;