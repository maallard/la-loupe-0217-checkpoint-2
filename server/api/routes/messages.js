import express from 'express';
import Message from '../models/message.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    let message = new Message();

    router.post('/', Auth.hasAuthorization, message.create);

    router.get('/',  Auth.hasAuthorization, message.findAll);

    app.use('/messages', router);

};
