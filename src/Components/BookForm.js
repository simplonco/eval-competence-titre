import React, { Component } from 'react'

class BookForm extends Component {

    render() {
        return(
            <form action={`http://localhost:8080/${this.props.route}`} method="POST">
                <input type="text" name="titre" placeholder="Titre" defaultValue={this.props.book && this.props.book.titre}/>
                <input type="text" name="auteur" placeholder="Auteur" defaultValue={this.props.book && this.props.book.auteur}/>
                <input type="text" name="année_de_publication" placeholder="année de sortie" defaultValue={this.props.book && this.props.book.année_de_publication}/>
                <input type="text" name="pages" placeholder="Pages" defaultValue={this.props.book && this.props.book.pages}/>
                <button type="submit" className="btn btn-primary">{this.props.route === "add" ? "Ajouter" : "modifier"} livre</button>
            </form>
        )
    }
}

export default BookForm