import React, { Component } from 'react';
import EditForm from './EditForm';

class EditButton extends Component {

  state = {
          formToggle: false
      }

  handleDisplay = () => {
    this.setState({
        formToggle: this.state.formToggle ? false : true
    })
  }

  render() {

    return (
      <div>
        <div className="edit-button">
            <button type="submit" className="btn btn-light btn-sm" onClick={() => this.handleDisplay()}>Modifier</button>
        </div>
      </div>
    );
  }

}

export default EditButton;
