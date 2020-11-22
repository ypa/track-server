const express = require('express');
const mongoose = require('mongoose');

const app = express();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const mongoUri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.mtymp.mongodb.net/<dbname>?retryWrites=true&w=majority`;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo', err);
});

app.get('/', (req, res) => {
  res.send('Hi there!');
});

app.listen(3000, () =>{
  console.log('Listening on port 3000')
});
