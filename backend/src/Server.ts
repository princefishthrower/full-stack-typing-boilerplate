import http from 'http';
import express from 'express';
import cors from 'cors';
import Router from './Router/Router';
import Constants from '../../shared/Constants/Constants';

// init express app
const app = express();

// CORS
const oCorsOptions = {
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200,
};
app.use(cors(oCorsOptions));

// all server routes (only GET and POST so far)
app.use('/', Router);

// create HTTP server
http.createServer(app).listen(Constants.BACKEND_PORT);

console.log('Backend server listening at ' + Constants.BACKEND_PORT + '!')
