import jsonwebtoken from 'jsonwebtoken';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import token from '../token.js';
import User from './user.js';



const tchatSchema = new mongoose.Schema({
    pseudo: {
        type: String,
    },
    text: {
        type: String
    },
    like: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }

});



let model = mongoose.model('Tchat', tchatSchema);

export default class Tchat {


    findAll(req, res) {
        model.find({}, {
            password: 0
        }, (err, tchats) => {
            if (err || !tchats) {
                res.sendStatus(403);
            } else {
                res.json(tchats);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, {
            password: 0
        }, (err, tchat) => {
            if (err || !tchat) {
                res.sendStatus(403);
            } else {
                res.json(tchat);
            }
        });
    }

    create(req, res) {
      console.log('create OK');
        model.create(req.body,
            (err, tchat) => {
                if (err || !tchat) {
                    res.status('nop').send(err.message);
                } else {

                    res.json(tchat);
                }
            });
    }

    update(req, res) {
      console.log(req.body);
        model.update({
            _id: req.params.id
        },{$push:{like:{ user: req.body.userId}}} , (err, tchat) => {
            if (err || !tchat) {
                res.status(500).send(err.message);
            } else {
                let tk = jsonwebtoken.sign(tchat, token, {
                    expiresIn: "24h"
                });
                res.json({
                    success: true,
                    tchat: tchat,
                    token: tk
                });
            }
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
}
