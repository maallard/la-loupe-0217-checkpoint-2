import express from 'express';
import Comment from '../models/comment.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var comment = new Comment();

    router.post('/', Auth.hasAuthorization, comment.create);

    router.get('/', Auth.hasAuthorization, comment.getAll);

    app.use('/comments', router);

};
