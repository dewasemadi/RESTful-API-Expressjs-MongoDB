import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dbConnection from './db/db.config.js';
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import mahasiswaRouter from './routes/mahasiswa.js';
const __dirname = path.resolve();

// db connection
dbConnection();

// app configuration
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// endpoints
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mahasiswa', mahasiswaRouter);

export default app;
