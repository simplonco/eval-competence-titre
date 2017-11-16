const express = require('express');
const Book = require('../model/Book');

const router = express.Router()

// #POST method
router.post('/add', (req, res) => {
  const newBook = new Book(req.body); // nouvelle instance du modèle Book

  newBook.save((err) => {     // on enregistre le Book dans la db
    if (err) res.send(err)
  })
  res.redirect('http://localhost:3000') // redirection sur la page de l'app (React)
})

// #GET method
router.get('/', (req, res) => {
  Book.find((err, books) => { // on utilise la méthode .find() de mongoose
    if (err) res.send(err)
    res.json(books)
  })
})

// #GET byId method
router.get('/:id', (req, res) => {
  Book.findById(req.params.id, (err, book) => { // on utilise la méthode .findById() de mongoose
    if (err) res.send(err)
    res.json(book)
  })
})

// #PUT method
router.post('/:id/update', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body, (err, prevBook) => { // on utilise la méthode .findByIdAndUpdate() de mongoose
    if (err) res.send(err)
    res.redirect("http://localhost:3000")
  })
})

// #DELETE method
router.get('/:id/delete', (req, res) => {
  Book.findByIdAndRemove(req.params.id, (err) => {
    if (err) res.send(err)
  })
  res.redirect('http://localhost:3000/') // on redirige sur la page de l'app (React)
})

module.exports = router;
