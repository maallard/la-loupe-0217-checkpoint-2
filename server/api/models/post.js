import jsonwebtoken from 'jsonwebtoken';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import token from '../token.js';

const hashCode = (s) => s.split("").reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    a & a;
}, 0);

const postSchema = new mongoose.Schema({
    user: {
        type: String,
        default:"",
    },
    post: {
        type: String,
        default:"",
    },
    date: {
        type: Date,
        default: Date.now
    }
});

postSchema.methods.comparePassword = function(pwd, cb) {
    bcrypt.compare(pwd, this.password, function(err, isMatch) {
        if (err) cb(err);
        cb(null, isMatch);
    });
};

let model = mongoose.model('Post', postSchema);

export default class Post {



    findAll(req, res) {
        model.find({}, {
            password: 0
        }, (err, posts) => {
            if (err || !posts) {
                res.sendStatus(403);
            } else {
                res.json(posts);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, {
            password: 0
        }, (err, post) => {
            if (err || !post) {
                res.sendStatus(403);
            } else {
                res.json(post);
            }
        });
    }

    create(req, res) {
        model.create(req.body,
            (err, post) => {
                if (err || !post) {
                    res.status(500).send(err.message);
                } else {
                    res.json(post);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, req.body, (err, post) => {
            if (err || !post) {
                res.status(500).send(err.message);
            } else {
                let tk = jsonwebtoken.sign(post, token, {
                    expiresIn: "24h"
                });
                res.json({
                    success: true,
                    post: post,
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
