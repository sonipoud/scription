const router = require('express').Router();
const db = require('../db/db.json');
const fs = require('fs');
const {v4: uuidv4} = require('uuid');


router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            throw err
        }
        res.json(JSON.parse(data));
    });
});

router.post('/api/notes', (req, res) => {
    if (!req.body.id) {
        req.body.id = uuidv4();
        createNewNotes(req.body, notes);
    } else {
        editNote(req.body, notes);
    }
    res.json(req.body);
});


module.exports = router;