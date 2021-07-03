const fs = require("fs");
const path = require("path");


function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note)
    console.log(body);
    console.log(notesArray);
    
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray)
    );
    return note;
};

// function removeNote = (notes, notesArray) {

// }

module.exports = { createNewNote };