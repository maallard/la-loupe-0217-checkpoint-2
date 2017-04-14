import mongoose from 'mongoose';
import trail from './msg.js';
import user from './user.js';

const msgSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date
    }
});

let model = mongoose.model('Msg', msgSchema);

export default class Msg {

    create(req, res) {
        let msg = req.body;
        console.log('req.body', req.body);
        msg.date = new Date().toISOString();
        model.create(msg, (err, msg) => {
                if (err) {
                    res.status(500).send({
                      error: err
                    });
                } else {
                    res.json({
                        success: true,
                        msg: msg
                    });
                }
            });
    }

    findAll(req, res) {
        model.find({trail: req.params.idTrail})
            .populate('author')
            .exec((err, msg) => {
                if (err || !msg) {
                    res.sendStatus(403);
                } else {
                    res.json(msg);
                }
            });
    }
}
