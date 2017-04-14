import mongoose from 'mongoose';
import User from './user.js';

const commentSchema = new mongoose.Schema({

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        default: new Date()
    },
    body: {
        type: String
    }
});


let model = mongoose.model('Comment', commentSchema);

export default class Comment {

    findAll(req, res) {
        model.find({},
            (err, comments) => {
                if (err || !comments) {
                    res.sendStatus(403);
                } else {
                    res.json(comments);
                }
            });
    }

    findAllForComment(req, res) {
        model.find({
          beerId: req.params.beerId
        })
        .populate('author', 'name')
        .exec(
          (err, comments) => {
              if (err || !comments) {
                  res.sendStatus(403);
              } else {
                  res.json(comments);
              }
          });
    }

    addComment(req, res) {
        model.create(req.body,
            (err, comment) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(comment);
                }
            });
    }

    delComment(req, res) {
        model.findOneAndUpdate({
                _id: req.body.comments,
            }, {
                $pull: {
                    comments: {
                        commentId: req.body.beer
                    }
                }
            },
            (err, comments) => {
                if (err || !comments) {
                    res.status(500).send(err.message);
                } else {
                    res.json(comments);
                }
            });
    }
}
