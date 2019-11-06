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

//Rotas referentes ao feed
routes.get('/feed', FeedController.show);

//Rotas referentes ao usuário
routes.post('/users', UserController.store);

module.exports = routes;