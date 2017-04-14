import mongoose from 'mongoose';


const messageSchema = new mongoose.Schema({
    content: {
        type: String
    }
});


let model = mongoose.model('Message', messageSchema);

export default class Message {

    create(req, res) {
        model.create(req.body, function(err, message) {
            res.json(message);
        });
    }
    findAll(req, res) {
        model.find(req.body, function(err, message) {
            res.json(message);
        });
    }
    delete(req, res) {
            model.findByIdAndRemove(req.params.id, (err) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.sendStatus(200);
                }
            });
        }
        update(req, res) {
            model.update({
                _id: req.params.id
            }, req.body, (err, message) => {
                if (err || !message) {
                    res.status(500).send(err.message);
                };
                    res.json({
                        success: true,
                        message: message,
                        token: tk
                    });
                }
            );
        }
};
