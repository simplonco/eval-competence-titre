import React, { Component } from 'react'
import BookForm from './BookForm'
import BookCard from './BookCard'

class BookContainer extends Component {
    state = {
        librairie: []
    }

    componentDidMount() {
        fetch('http://localhost:8080/')
            .then(res => res.json())
            .then(data => this.setState({
                librairie: data
            }))
            .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                <h1>Librairie de Simplon</h1>
                <BookForm route="add" />
                <div className="cardContainer">
                    {this.state.librairie.map(book => {
                        return <BookCard key={book._id} book={book} />
                    })}
                </div>
            </div>
        )
    }
}

export default BookContainer