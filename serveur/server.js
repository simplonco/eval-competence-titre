const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const config = require('./config/config');
const router = require('./routes/routes');


mongoose.connect(config.mongoUrl, () => {
  console.log('db initialized...');
});

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(router);

 app.listen(config.port, () => {
   console.log(`Started on port ${config.port}`);
 });