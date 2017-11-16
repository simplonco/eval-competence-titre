import mongoose from 'mongoose'
import moment from 'moment'

const bookSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    auteur: {
        type: String,
        required: true
    },
    année_de_publication: {
        type: Number,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    date_de_création: {
        type: String,
        default: moment(Date.now()).format('ll') // output "mmm dd, yyyy"
    }
})

export default mongoose.model('Book', bookSchema, 'books')