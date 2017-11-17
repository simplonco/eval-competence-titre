import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import config from './config/config';
import router from './routes/routes';

mongoose.connect(config.mongooseUrl, () => {
  console.log("DB initialized...");
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', router);

app.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}...`);
});
