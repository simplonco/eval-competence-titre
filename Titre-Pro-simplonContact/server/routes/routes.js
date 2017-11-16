const express = require('express');
const Contact = require('../model/Contact');

const router = express.Router();

// #POST method
router.post('/add', (req, res) => {
  const newContact = new Contact(req.body);

  newContact.save((err) => {
    if (err) res.send(err)
  })
  res.redirect('http://localhost:3000/')
})

// #GET method
router.get('/', (req, res) => {
  Contact.find((err, contacts) => {
    if (err) res.send(err)
    res.json(contacts)
  })
})

// #Get byId method
router.get('/:id', (req, res) => {
  Contact.findById(req.params.id, (err, contact) => {
    if (err) res.send(err)
    res.json(contact)
  })
})

// #PUT method
router.post('/:id/update', (req, res) => {
  Contact.findByIdAndUpdate(req.params.id, req.body, (err, contact) => {
    if (err) res.send(err)
    res.redirect("http://localhost:3000/")
  })
})

// #DELETE method
router.get('/:id/delete', (req, res) => {
  Contact.findByIdAndRemove(req.params.id, (err) => {
    if (err) res.send(err)
  })
  res.redirect('http://localhost:3000/')
})

module.exports = router;
