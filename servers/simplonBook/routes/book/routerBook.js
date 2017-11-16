import express from 'express'

import Book from '../../model/Book'

const router = express.Router()

router.get('/', (req, res) => {
    Book.find((err, books) => {
        err ? res.send(err) : res.json(books)
    })
})

router.post('/add', express.urlencoded({ extended: true }), (req, res) => {
    const newBook = new Book(req.body)

    newBook.save((err, book) => {
        if (err) return res.send(err)

        res.redirect('http://localhost:3000')
    })
})

router.get('/delete/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, (err, book) => {
        if (err) return res.send(err)

        res.redirect('http://localhost:3000')
    })
})

router.post('/update/:id', express.urlencoded({ extended: true }), (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, (err, book) => {
        if (err) return res.send(err)

        res.redirect('http://localhost:3000')
    })
})

export default router