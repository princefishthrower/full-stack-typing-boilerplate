import express from 'express';
import * as GetRoutes from './routes/get';
const Router = express.Router();

// GET routes 
Router.get('/get-user', GetRoutes.getUser);
Router.get('/get-users-with-posts', GetRoutes.getUsersWithPosts);

export default Router;
