const express = require('express');
const mongoose = require('mongoose');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World Again!')
})

app.put('/', (req, res) => {
  res.send('Sent')
})

mongoose.connect('mongodb://Student01:Student01@logan', { dbName: 'home16' })
    .then(() => {
        console.log("Connected to the database!");
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    })
    .catch(() => {
        console.log("Failed to connect to the database.");
    });