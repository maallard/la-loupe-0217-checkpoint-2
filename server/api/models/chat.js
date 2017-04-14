import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  user: {
    type: String,
  },
  commentaire: {
    type: String,
  },
  creation_Date: {
    type: Date,
    default: Date.now
  }
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
                        chatRenvoyé: chat
                    });
                }
            });
        }

    getAll(req, res) {
      model.find({}, (err, chat) => {
        if (err || chat === undefined) {
          res.sendStatus(500);
        } else {
          res.json({
              chatRenvoyé: chat
          });
        }
      });
    }

  //   deleteOne(req, res) {
  //     console.log(req.params);
  //     model.findByIdAndRemove(req.params.todoId, (err) => {
  //       if (err) {
  //           res.status(500).send(err.message);
  //       } else {
  //           res.sendStatus(200);
  //       }
  //     });
  //   }
  //
  //   updateOne(req, res) {
  //     console.log(req.params);
  //     model.update({
  //         _id: req.params.todoId               // C'est ce que tu recherches =>  _id : req.params.id
  //     }, req.body, (err, todos) => {          // Les champs que tu modifies => req.body
  //         if (err) {
  //             res.status(500).send(err.message);
  //         } else {
  //                 res.sendStatus(200);
  //         }
  //     });
  // }
}
