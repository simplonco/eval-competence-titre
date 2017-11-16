import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  titre: { type: String, required: true },
  entreprise: { type: String, required: true },
  email: { type: String, required: true },
  adresse: { type: String, required: true },
  telephone: {
    mobile: { type: Number, required: false },
    work: { type: Number, required: true }
  }
}, { versionKey: false });

export default mongoose.model('Contact', contactSchema);
