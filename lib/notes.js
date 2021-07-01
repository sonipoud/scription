const fs = require("fs");
const path = require("path");

function findById(id, notesArray) {
    const result = notesArray.filter((note) => notes.id === id)[0];
    return result;
};

function createNewNote(body, notesArray) {
    const notes = body;
    notesArray.push(notes);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return notes;
};

// function removeNote = (notes, notesArray) {

// }

module.exports = { findById, createNewNote };