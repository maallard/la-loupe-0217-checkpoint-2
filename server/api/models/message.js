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
}
