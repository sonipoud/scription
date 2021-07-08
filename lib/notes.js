const fs = require("fs");
const path = require("path");
const uuid = require('uuid');


function createNewNote(body, notesArray) {
    const note = body;
    const id = uuid.v4()
    note.id = id
    // console.log(note);
    notesArray.push(note)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray)
    );
    return note;
};

function deleteNote(id, notesArray) {
    const filteredNotes = notesArray.filter(note => {
        if(note.id !== id){
            return true;
        } else return false;
    })
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(filteredNotes)
    );
   return filteredNotes;
};

module.exports = { createNewNote, deleteNote };