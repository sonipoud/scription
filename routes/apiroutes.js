const router = require('express').Router();
const db = require('../db/db.json');
const fs = require('fs');
// const findById = require('')

router.get('/api/notes', (req,res) => {
   fs.readFile('./db/db.json', 'utf8', (err,data) => {
       if(err){
           throw err
       }
       res.json(JSON.parse(data));
   }) 
})

// router.get('/api/notes/:id', (req,res) => {
//     const result = findById(req.params.id, notes);
//     if(result){
//         res.json(result);
//     }else{
//         res.send(404);
//     }
// });

router.post('/api/notes', (req,res) => {
    req.body.id = notes.length.toString();
    const notes = createNewNotes(req.body, notes);
    res.json(notes);
});


module.exports = router;