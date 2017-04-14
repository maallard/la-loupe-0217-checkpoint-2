import express from 'express';
import Chat from '../models/chat.js';

let router = express.Router();

module.exports = (app) => {

    var chat = new Chat();

    router.post('/', chat.create);

    router.get('/', chat.getAll);

    app.use('/chat', router);

};
