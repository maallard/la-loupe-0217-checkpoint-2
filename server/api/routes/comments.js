import express from 'express';
import Comment from '../models/comment.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var comment = new Comment();

    router.get('/', comment.getAll);

    router.get('/', comment.findByName);

    router.post('/', comment.create);

    app.use('/chat', router);

};
