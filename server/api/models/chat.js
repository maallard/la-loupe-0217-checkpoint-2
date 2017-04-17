import mongoose from 'mongoose';
import User from './user.js';



const chatSchema = new mongoose.Schema({
    chatPost: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});


let model = mongoose.model('Chat', chatSchema);

export default class Chat {

  findAll(req, res) {
    model.find({},
        (err, chats) => {
            if (err || !chats) {
                res.sendStatus(403);
            } else {
                res.json(chats);
            }
        });
}
//   findById(req, res) {
//     model.findById({
//       commentId: req.params.commentId
//     })
//       .populate('name', 'pseudo')
//       .exec(
//         (err, chats) => {
//             if (err || !chats) {
//                 res.sendStatus(403);
//             } else {
//                 res.json(chats);
//             }
//         });
// }


    createChat(req, res) {
        model.create(req.body,
            (err, chat) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(chat);
                }
            });
        }

    }
