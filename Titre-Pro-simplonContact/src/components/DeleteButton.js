import React, { Component } from 'react';

class DeleteButton extends Component {

  render() {
    return (
      <div>
        <form action={`http://localhost:3005/${this.props.id}/delete`} method="GET">
          <button type="submit" className="btn btn-secondary btn-sm">Supprimer</button>
        </form>
      </div>
    );
  }

}

export default DeleteButton;
