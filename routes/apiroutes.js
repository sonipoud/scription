const router = require('express').Router();
const db = require('../db/db.json');
const fs = require("fs");
const {v4: uuidv4} = require('uuid');
const { createNewNote, findById } = require('../lib/notes')


router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            throw err
        }
        res.json(JSON.parse(notes));
    });
});

router.post("/api/notes", (req, res) => {
    req.body.id = notes.length.toString();

    if (!req.body.id) {
        req.body.id = uuidv4();
        createNewNote(req.body, notes);
    }
    res.json(req.body);
});


module.exports = router;