import jsonwebtoken from 'jsonwebtoken';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import token from '../token.js';

const hashCode = (s) => s.split("").reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    a & a;
}, 0);

const chatSchema = new mongoose.Schema({
    name: {
        type: String
    },
    text: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

let model = mongoose.model('Chat', chatSchema);

export default class Chat {

    create(req, res) {
        model.create(req.body, (err, chats) => {
            if (err || !chats) {
                res.sendStatus(403);
            } else {
                res.json(chats);
            }
        });
    }
    findAll(req, res) {
        model.find({}, (err, chats) => {
            if (err || !chats) {
                res.sendStatus(403);
            } else {
                res.json(chats);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id,
            (err, chats) => {
                if (err) {
                    res.sendStatus(500);
                } else {
                    res.json(chats);
                }
            });
    }

    findByName(req, res) {
        model.find({
                name: req.params.name
            },
            (err, messages) => {
                if (err || !chats) {
                    res.sendStatus(500);
                } else {
                    res.json(chats);
                }
            });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.chat);
            } else {
                res.sendStatus(200);
            }

          }
        });
