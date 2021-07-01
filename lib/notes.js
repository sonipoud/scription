const fs = require("fs");
const path = require("path");

function findById(id, notesArray) {
    const result = notesArray.filter((note) => note.id === id)[0];
    return result;
};

module.exports = { findById };