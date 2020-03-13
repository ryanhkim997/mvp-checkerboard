const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/index.js')
const Board = require('../db/schema.js')

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Assuming we only have one entry in the database, this finds just one entry
app.get('/api/board', (req, res) => {
  Board.findOne()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((err) => console.error(err));
})


//Posts whatever contents are in the request body to the database
app.post('/api/board', (req, res) => {
  const { body } = req
  Board.create(body)
    .then(() => {
      res.status(200).send('Successful post server-side.')
    })
    .catch((err) => console.error(err));
})


//WARNING: DELETES ALL IN DB
app.delete('/api/board', (req,res) => {
  Board.deleteMany()
    .then(() => {
      res.status(200).send('Successful wipe of database.')
    })
    .catch((err) => console.error(err));
})

//Static files for compilation
app.use('/', express.static(path.join(__dirname, '../client/dist/')));

app.listen(port, () => console.log(`Listening on port ${port}...`));