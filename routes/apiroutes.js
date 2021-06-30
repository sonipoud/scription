const router = require('express').Router();
const db = require('../db/db.json');
const fs = require('fs');

router.get('/api/notes', (req,res) => {
   fs.readFile('./db/db.json', 'utf8', (err,data) => {
       if(err){
           throw err
       }
       res.json(JSON.parse(data));
   }) 
})

module.exports = router;