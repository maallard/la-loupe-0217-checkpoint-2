import express from 'express';
import Chat from '../models/chat.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    app.get('/token_status', Auth.hasAuthorization, (req, res, next) => {
        res.sendStatus(200);
    });

    var chat = new Chat();

    router.get('/', chat.findAll);

    router.post('/createchat', Auth.hasAuthorization, chat.createChat);

    app.use('/chats', router);

};
