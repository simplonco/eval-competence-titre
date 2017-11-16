import { Router } from 'express';
import mongoose from 'mongoose';
import Book from '../models/book';

const router = Router();

// Ajouter un livre
router.post('/add', (req, res) => {
  let book = new Book(req.body);
  book.save((err) => {
    if (err) return res.send(err);
    res.redirect('http://localhost:3000')
  });
});

// Voir tous les livres
router.get('/', (req,res) => {
  Book.find({}, (err, books) => {
    if (err) return res.send(err);
    res.redirect('http://localhost:3000');
  });
});

// Voir un livre en particulier
router.get('/:id', (req, res) => {
  Book.findById(req.params.id, (err, book) => {
    if (err) return res.send(err);
    res.json(book);
  });
});

// Modifier un livre
router.put('/:id/update', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body, (err, prevBook) => {
    if (err) return res.send(err);
    res.send(`Le livre ${prevBook.titre} a été modifié`);
  });
});

// Supprimer un livre
router.delete('/:id/remove', (req, res) => {
  Book.findByIdAndRemove(req.params.id, (err, book) => {
    if (err) return res.send(err);
    res.send(`Le livre ${book.titre} a bien été supprimé`);
  });
});

export default router;
