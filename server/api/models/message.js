import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    content: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    creation_date: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
        default: []
    }
});

let model = mongoose.model('Message', messageSchema);

export default class Message {

    create(req, res) {
        model.create(req.body, (err, message) => {
            if (err || !message) {
                res.status(403).send({
                    err
                });
            } else {
                res.json({
                    success: true,
                    message
                });
            }
        });
    }

    findAll(req, res) {
        model.find({})
            .populate('author', {
                'password': 0,
                'isAdmin': 0,
                '__v': 0
            })
            .populate('likes', {
                'password': 0,
                'isAdmin': 0,
                '__v': 0
            })
            .exec((err, messages) => {
                if (err || !messages) {
                    res.status(403).send({
                        err
                    });
                } else {
                    res.json({
                        messages
                    });
                }
            });
    }

    setLike(req, res) {
        // TODO make it so that someone can remove a like
        let liked = req.body.liked;

        if (typeof liked === 'boolean') {
            let update = {};
            if (liked) {
                update = {
                    $push: {
                        likes: req.params.likerId
                    }
                };
            } else {
                update = {
                    $pull: {
                        likes: req.params.likerId
                    }
                };
            }

            model.findByIdAndUpdate(req.params.messageId,
                update, {
                    new: true
                }, (err, likedMessage) => {
                    if (err || !likedMessage) {
                        res.status(403).send({
                            err
                        });
                    } else {
                        res.json({
                            likedMessage
                        });
                    }
                });
        } else {
            res.status(400).send({
                err
            });
        }
    }


}
