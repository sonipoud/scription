const router = require('express').Router();
const notes = require('../db/db.json');
const fs = require("fs");

const { createNewNote } = require('../lib/notes.js')


router.get('/api/notes', (req, res) => {
    const note = JSON.parse(fs.readFileSync('./db/db.json'), 'utf-8');
    res.json(note);
});

router.post("/api/notes", (req, res) => {
    const note = createNewNote(req.body, notes);
    res.json(note);
});

// router.delete("/api/notes", (req,res) => {
//     const note = deleteNote();
//     res.json(note);     
// });

module.exports = router;