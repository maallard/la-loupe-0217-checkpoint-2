import express from 'express';
import Message from '../models/message.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    app.get('/token_status', Auth.hasAuthorization, (req, res, next) => {
        res.sendStatus(200);
    });

    var message = new Message();



    router.get('/', Auth.hasAuthorization, message.findAll);
    //
    // router.get('/:id', Auth.hasAuthorization, message.findById);

    router.post('/', message.create);

    // router.put('/:id', Auth.isAdministrator, message.update);
    //
    // router.delete('/:id', Auth.isAdministrator, message.delete);

    app.use('/messages', router);

};
