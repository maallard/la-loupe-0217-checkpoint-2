import express from 'express';
import Tchat from '../models/tchat.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    app.get('/token_status', Auth.hasAuthorization, (req, res, next) => {
        res.sendStatus(200);
    });

    var tchat = new Tchat();
    router.post('/', tchat.create);

    router.get('/', Auth.hasAuthorization, tchat.findAll);

    router.get('/:id', Auth.hasAuthorization, tchat.findById);


    router.put('/:id', Auth.hasAuthorization, tchat.update);

    router.delete('/:id', Auth.hasAuthorization, tchat.delete);

    app.use('/tchats', router);

};
