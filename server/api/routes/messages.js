import express from 'express';
import Message from '../models/message.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var message = new Message();

    router.post('/', message.create);

    router.get('/', message.findAll);

    app.use('/messages', router);

};
