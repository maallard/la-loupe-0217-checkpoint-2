import express from 'express';
import Chat from '../models/chat.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    app.get('/token_status', Auth.hasAuthorization, (req, res, next) => {
        res.sendStatus(200);
    });

    var chat = new Chat();

    router.get('/', Auth.hasAuthorization, chat.findAll);

    router.get('/:id', Auth.hasAuthorization, chat.findById);

    router.post('/', chat.create);

    router.put('/:id', Auth.isAdministrator, chat.update);

    router.delete('/:id', Auth.isAdministrator, chat.delete);

    app.use('/chat', router);

};
