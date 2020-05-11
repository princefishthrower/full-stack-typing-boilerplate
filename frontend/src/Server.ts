import http from 'http';
import path from 'path';
import express from 'express';
import Constants from '../../shared/Constants/Constants';

// init express app
const app = express();

// statically server public folder assets
app.use(express.static(path.join(__dirname, 'public')));

const fullfuckingpath = path.join(__dirname, 'public', 'index.html');
console.log(fullfuckingpath);

app.get('/', function(req, res) {
    res.sendFile(fullfuckingpath);
});


http.createServer(app).listen(Constants.FRONTEND_PORT);

console.log('Frontend server listening at ' + Constants.FRONTEND_PORT + '!')