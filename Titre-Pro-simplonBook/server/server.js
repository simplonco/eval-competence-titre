const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

const config   = require('./config/config');
const router   = require('./routes/routes');

const app = express();

mongoose.connect(config.mongoUrl, () => {
  console.log('DB initialized...');
});

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(router);


app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
})
