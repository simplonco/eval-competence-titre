const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();

const Contact = require('../model/contact');

// Show contacts
router.get('/', (req, res) => {
  Contact.find((err, contacts) => {
    if(err) {res.send(err)}
    res.json(contacts);
  });
});

// Show one contact
router.get('/:id', (req, res) => {
  Contact.findById(req.params.id, (err, contact) => {
    if(err) {res.send(err)}
    res.json(contact);
  });
});

// Post a contact
router.post('/add', bodyParser.urlencoded({ extended: true }), (req, res) => {
  const newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if(err) {res.send(err)}
    res.redirect("http://localhost:3000");
  });
});

// Update a contact
router.post('/:id/edit', bodyParser.urlencoded({ extended: true }), (req, res) => {
  Contact.findByIdAndUpdate(req.params.id, req.body, (err, updatedContact) => {
    if(err) {res.send(err)}
    res.redirect('http://localhost:3000')
  });
});

// Delete a contact
router.post('/:id/delete', (req, res) => {
  Contact.findByIdAndRemove(req.params.id, (err, deletedContact) => {
    if(err) {res.send(err)}
    res.redirect('http://localhost:3000')
  });
});



module.exports = router;