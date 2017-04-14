import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    user: {
        type: String,
    },
    message: {
        type: String
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
});

let model = mongoose.model('Message', messageSchema);

export default class Message {

    create(req, res) {
        model.create(req.body,
            (err, message) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json({
                        success: true,
                        message: message
                    });
                }
            });
    }

    findAll(req, res) {
        model.find({},
            (err, messages) => {
                if (err || !messages) {
                    res.sendStatus(403);
                } else {
                    res.json({
                        message: message
                    });
                }
            });
    }
}
