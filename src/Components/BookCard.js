import React, { Component } from 'react'
import BookForm from './BookForm'

class BookCard extends Component {
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
            <div className="bookCard">
                <div>
                    <span>Titre: {this.props.book.titre}</span><button onClick={() => this.handleDisplay()} className="btn btn-primary editer">E</button><a href={`http://localhost:8080/delete/${this.props.book._id}`}><button className="deleter btn btn-danger">X</button></a>
                    <br></br><span>Auteur: {this.props.book.auteur}</span>
                    <br></br><span>Livre de {this.props.book.pages} pages publié en {this.props.book.année_de_publication}.</span>
                </div>
                <span>Ajouté à la librairie le {this.props.book.date_de_création}</span>
                <div style={displayer}>
                    <BookForm route={`update/${this.props.book._id}`} book={this.props.book} />
                </div>
            </div>
        )
    }
}

export default BookCard