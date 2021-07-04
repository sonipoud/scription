const router = require('express').Router();
const notes = require('../db/db.json');
const fs = require("fs");
const { createNewNote } = require('../lib/notes.js')


router.get('/api/notes', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./db/db.json'))

        res.json(data);
  
});

router.post("/api/notes", (req, res) => {
    let note = createNewNote(req.body, notes);
    console.log(note);
});


module.exports = router;