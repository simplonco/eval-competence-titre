import { Router } from 'express';
import mongoose from 'mongoose';

import Contact from '../models/contact';

const router = Router();

// Ajouter un contact
router.post('/add', (req, res) => {
  let newContact = new Contact(req.body);
  newContact.save((err, contact) => {
    if (err) res.send(err);
    res.redirect('http://localhost:3000');
  });
});

// Afficher tous les contacts
router.get('/', (req, res) => {
  Contact.find({}, (err, contacts) => {
    if (err) res.send(err);
    res.json(contacts);
  });
});

// Afficher un contact par son ID
router.get('/:id', (req, res) => {
  Contact.findById(req.params.id, (err, contact) => {
    if (err) res.send(err);
    res.json(contact);
  });
});

// Modifier un contact
router.post('/:id/update', (req, res) => {
  Contact.findByIdAndUpdate(req.params.id, req.body, (err) => {
    if (err) res.send(err);
    res.redirect('http://localhost:3000');
  });
});

// Supprimer un contact
router.get('/:id/delete', (req, res) => {
  Contact.findByIdAndRemove(req.params.id, (err, removedContact) => {
    if (err) res.send(err);
    res.redirect('http://localhost:3000');
  });
});

export default router;
