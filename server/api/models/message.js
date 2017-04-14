import jsonwebtoken from 'jsonwebtoken';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import token from '../token.js';

const hashCode = (s) => s.split("").reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    a & a;
}, 0);

const messageSchema = new mongoose.Schema({


  message: {
      type: String,
      required: true
  }

});

let model = mongoose.model('Message', messageSchema);

export default class User {



    findAll(req, res) {
        model.find({}, {
        }, (err, messages) => {
            if (err || !messages) {
                res.sendStatus(403);
            } else {
                res.json(users);
            }
        });
    }



    create(req, res) {
        model.create(req.body,
            (err, user) => {
              if (err || !messages) {
                  res.sendStatus(403);
              } else {
                  res.json(users);
              }
          });
      }
    }
