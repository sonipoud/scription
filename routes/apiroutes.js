const router = require('express').Router();
const notes = require('../db/db.json');
const fs = require("fs");
const { createNewNote } = require('../lib/notes.js')


router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            throw err
        }
        res.json(JSON.parse(data));
    });
});

router.post("/api/notes", (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
});


module.exports = router;