import express from 'express';
import Msg from '../models/msg.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {


    var msg = new Msg();

    router.get('/', Auth.hasAuthorization, msg.findAll);

    router.post('/', msg.create);

    app.use('/msgs', router);

};
