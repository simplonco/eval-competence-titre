const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  titre:                {type: String, required: true},
  auteur:               {type: String, required: true},
  annee_de_publication: {type: String, required: true},
  pages:                {type: String, required: true},
  date_de_creation:     {type: String, required: true},

})

module.exports = mongoose.model('Book', BookSchema, 'books');
