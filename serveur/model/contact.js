const mongoose = require('mongoose');

const newContact = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    titre: { type: String, required: true },
    entreprise: { type: String, required: true },
 	email: { type: String, required: true },
 	adresse: { type: String, required: true },
 	mobile: { type: String, required: true },
 	fixe: { type: String, required: true }
}
);

module.exports = mongoose.model('Contact', newContact);