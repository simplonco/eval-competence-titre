import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  titre: { type: String, required: false },
  auteur: { type: String, required: false },
  annee_de_publication: { type: Number, required: false },
  pages: { type: Number, required: false },
  date_de_creation: { type: Date, default: Date.now },
}, { versionKey: false });

export default mongoose.model('Book', bookSchema);
