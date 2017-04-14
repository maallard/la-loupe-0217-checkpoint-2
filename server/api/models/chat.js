import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({

    Message: {
        type: String
    },
    User: {
        type: String
    },
    Created_at: {
        type: Date,
        default: Date.now
    },
    Updated_at: {
        type: Date,
        default: Date.now
    }

    // Write schema here.
});

let model = mongoose.model('Chat', chatSchema);

export default class Chat {



  create(req, res) {
      model.create(req.body, (err, chat) => {
          if (err) {
              res.status(500).send(err.message);
          } else {
              res.json({
                  success: true,
                  chat: chat
              });
          }
      });
  }

  getAll(req, res) {
      model.find({}, (err, chats) => {
        if (err || chats === undefined) {
          res.sendStatus(500);
        } else {
          res.json({
              chats: chats
          });
        }
      });
    }

}
