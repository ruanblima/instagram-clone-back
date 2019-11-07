const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const PostController = require('./controllers/PostController');
const FeedController = require('./controllers/FeedController');
const UserController = require('./controllers/UserController');

const routes = express.Router();
const upload = multer(uploadConfig);

//Rotas referente a sessão
routes.post('/sessions', SessionController.store);

//Rotas referentes a post
routes.post('/posts', upload.single('imagem'), PostController.store);
routes.get('/posts', PostController.index);
routes.get('/posts/:id', PostController.show);
routes.put('/posts/:id', PostController.update);
routes.delete('/posts/:id', PostController.destroy);

//Rotas referentes ao feed
routes.get('/feed', FeedController.show);

//Rotas referentes ao usuário
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

module.exports = routes;