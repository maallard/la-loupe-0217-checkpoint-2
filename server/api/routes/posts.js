import express from 'express';
import Post from '../models/post.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    app.get('/token_status', Auth.hasAuthorization, (req, res, next) => {
        res.sendStatus(200);
    });

    var post = new Post();


    router.get('/', Auth.hasAuthorization, post.findAll);

    router.get('/:id', Auth.hasAuthorization, post.findById);

    router.post('/',Auth.hasAuthorization, post.create);

    router.put('/:id',  Auth.hasAuthorization, post.update);

    router.delete('/:id', Auth.isAdministrator, post.delete);

    app.use('/posts', router);

};
