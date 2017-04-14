import express from 'express';
import Message from '../models/messages.js';

let router = express.Router();

module.exports = (app) => {

    var message = new Message();

    router.post('/', message.create);

    router.get('/', message.findAll);

    app.use('/messages', router);

};
