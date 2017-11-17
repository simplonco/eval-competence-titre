import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  titre: { type: String, required: true },
  entreprise: { type: String, required: true },
  email: { type: String, required: true },
  adresse: { type: String, required: true },
  telephone: {
    mobile: { type: String, required: true },
    work: { type: String, required: true }
  }
}, { versionKey: false });

export default mongoose.model('Contact', contactSchema);
