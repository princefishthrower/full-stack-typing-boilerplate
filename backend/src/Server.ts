import http from 'http';
import express from 'express';
import cors from 'cors';
import Router from './Router/Router';
import Constants from '../../shared/Constants/Constants';

// init express app
const app = express();

// CORS
const oCorsOptions = {
    origin: ['localhost:3000'],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(oCorsOptions));

// all server routes (only GET and POST so far)
app.use('/', Router);

// create HTTP server
http.createServer(app).listen(Constants.BACKEND_PORT);