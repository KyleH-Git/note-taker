const api = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

api.get('/notes', (req, res) => {
  fs.readFile('../db/db.json', 'utf8', (err, data) =>{
    res.json(JSON.parse(data));
    if(err) throw err;
  })
});

api.post('/notes', (req, res) => {

});

api.delete('/notes/:id', (req, res) => {

});

module.exports = api;