const api = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

api.get('/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) =>{
    res.json(JSON.parse(data));
    if(err) throw err;
  })
});

api.post('/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) =>{
    const tempData = JSON.parse(data);
    tempData.push({
      title: req.body.title,
      text: req.body.text,
      id: uuidv4(),
    });
    fs.writeFile('./db/db.json', JSON.stringify(tempData), (err) =>{
      if(err) throw err;
      res.json(req.body);
    });
  })
});

api.delete('/notes/:id', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) =>{
    const tempData = JSON.parse(data);
    const filterData = tempData.filter(note => note.id != req.params.id)
    fs.writeFile('./db/db.json', JSON.stringify(filterData), (err) =>{
      if(err) throw err;
      res.json(req.body);
    });
  })
});

module.exports = api;