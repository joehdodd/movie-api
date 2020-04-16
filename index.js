import 'regenerator-runtime/runtime';
import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import moviesRouter from './routes/movies';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/movies', moviesRouter);

app.listen(8080, () => {
  console.log('Movies API on port 8080');
})