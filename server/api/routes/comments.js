import express from 'express';
import Comments from '../models/Comment.js';


let router = express.Router();

module.exports = (app) => {


    var comment = new Comments();



    // router.get('/', comment.findAll);
    //
    // router.get('/:date', comment.findByDate);

    router.post('/', comment.create);


    app.use('/chat', router);

};
