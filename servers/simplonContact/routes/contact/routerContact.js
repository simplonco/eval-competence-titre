import express from 'express'

import Contact from '../../model/Contact'

const router = express.Router()

router.get('/', (req, res) => {
    Contact.find((err, contacts) => {
        err ? res.send(err) : res.json(contacts)
    })
})

router.post('/add', express.urlencoded({ extended: true }), (req, res) => {
    req.body.telephone = {
        work: req.body.work.toString(),
        mobile: req.body.mobile.toString()
    } 
    const newContact = new Contact(req.body)

    newContact.save((err, contact) => {
        if (err) return res.send(err)

        res.redirect('http://localhost:3000')        
    })
})

router.get('/delete/:id', (req, res) => {
    Contact.findByIdAndRemove(req.params.id, (err, contact) => {
        if (err) return res.send(err)

        res.redirect('http://localhost:3000')
    })
})

router.post('/update/:id', express.urlencoded({ extended: true }), (req, res) => {    
    if (req.body.work && req.body.mobile) req.body.telephone = {
        work: req.body.work.toString(),
        mobile: req.body.mobile.toString()
    } 
    
    Contact.findByIdAndUpdate(req.params.id, req.body, (err, contact) => {
        if (err) return res.send(err)

        res.redirect('http://localhost:3000')        
    })
})

export default router