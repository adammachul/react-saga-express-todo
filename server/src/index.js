import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

import userController from './components/user/userController';
import authController from './components/auth/authController';
import todoController from './components/todo/todoController';

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

mongoose.connect('mongodb://localhost:27017');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/api', userController);
app.use('/api/auth', authController);
app.use('/api', todoController);

app.listen(5000, () => console.log('Listening on port 5000!'));