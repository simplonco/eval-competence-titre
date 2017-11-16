import express from 'express';

//IMPORT CONTACT SCHEMA FROM DB
import Contact from '../models/contact';

const router = express.Router();


//ROUTE : DISPLAY ALL CONTACTS
router.get('/', (req, res) => {
    Contact.find((err, contacts) => {
        if (err) {
            res.send(err)
        }
        res.json(contacts)
    });
});

//ROUTE : DISPLAY CONTACT BY ID
router.get('/:id', (req, res) => {
    Contact.findById(req.params.id, (err, contacts) => {
        if (err) {
            res.send(err)
        }
        res.json(contacts)
    });
});

//ROUTE : ADD A CONTACT
router.post('/add', express.urlencoded({extended: true}), (req, res) => {
    let newContact = new Contact(req.body);
    newContact.save((err) => {
        if (err) {
            return res.send(err)
        }
        res.redirect('http://localhost:3000')
    });
});

//ROUTE: MODIFY A CONTACT BY ID
router.put('/:id', (req, res) => {
    Contact.findById({_id: req.params.id}, (err, contacts) => {
        if(err) {
            res.send(err)
        }
        Contact.title = req.body.title;
        Contact.save((err) => {
            if(err) {
                res.send(err)
            }
            res.json('Contact updated !')
        });
    });
});

//ROUTE : DELETE A CONTACT BY ID
router.post('/delete/:id', express.urlencoded({
    extended: true
}), (req, res) => {
    Contact.findByIdAndRemove({_id: req.params.id}, (err, contacts) => {
        if(err) {
            return res.send(err)
        }
        res.redirect('http://localhost:3000')
    })
});

module.exports = router;