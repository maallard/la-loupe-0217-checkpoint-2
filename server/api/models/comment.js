import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    author: {
        type: String,
    },
    published: {
        type: Date,
        default: Date.now,
    },
});

let model = mongoose.model('Comment', commentSchema);

export default class Comment {

    create(req, res) {
        model.create(req.body,
            (err, comment) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json({
                        success: true,
                        comment: comment,
                    });
                }
            });
    }
    getAll(req, res) {
        model.find({}, (err, comments) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(comments);
            }
        });
    }

    findByName(req, res) {
        model.find({}, (err, comments) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(comments);
            }
        });
    }
}
