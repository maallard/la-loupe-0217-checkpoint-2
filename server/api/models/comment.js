import mongoose from 'mongoose';
import User from './user.js';

const commentSchema = new mongoose.Schema({
    content: {
      type: String
    },
    user: {
      userName: {
        type: String
      }
    },
    date: {
      type: Date,
      default: new Date()
    }
});

let model = mongoose.model('Comment', commentSchema);

export default class Comment {

    getAll(req, res) {
        model.find({}, (err, comments) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json(comments);
            }
        });
    }

    create(req, res) {
        console.log('body', req.body);
        model.create(req.body,
        (err, comment) => {
          if (err || !comment) {
            console.log('err', err.message);
            res.status(500).send(err.message);
          } else {
            res.json({
              success: true,
              comment: comment
            });
          }
        });
    }
}
