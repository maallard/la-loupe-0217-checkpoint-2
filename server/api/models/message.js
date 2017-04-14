import mongoose from 'mongoose';

const messagesSchema = new mongoose.Schema({
  message_sent: {
      type: String
  },
  author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
  },
  created_at: {
      type: Date,
      default: Date.now
  }
});

let model = mongoose.model('Message', messagesSchema);

export default class Message {
    findAll(req, res) {
        model.find({}).populate("author", {username: 1}).exec((err, messages) => {
            if (err || !messages) {
                res.sendStatus(403);
            } else {
                res.json(messages);
            }
        });
    }

    create(req, res) {

        model.create(req.body,
            (err, message) => {
                if (err || !message) {
                    res.status(500).send(err.message);
                } else {
                    res.json({
                        success: true,
                        message: message,
                    });
                }
            });
    }
  }
