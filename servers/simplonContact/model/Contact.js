import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    prénom: {
        type: String,
        required: true 
    },
    titre: {
        type: String,
        required: true        
    },
    entreprise: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    telephone: {
        // Je choisis de les afficher sous String étant donné que Mongo ne veut pas display le 0 d'office quand le nombre commence par 0(reste des bugs sous String(pas le temps de chercher pour l'éval))
        work: {
            type: String,
            required: true
        },
        mobile: {
            type: String,
            required: true
        }
    }
})

export default mongoose.model('Contact', contactSchema, 'contacts   ')