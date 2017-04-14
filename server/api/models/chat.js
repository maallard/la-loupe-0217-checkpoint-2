import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    userPseudo: {
        type: String,
        required : true
    },
    element: String,
    date: {
        type: Date,
        default: Date.now
    }
});

let model = mongoose.model('Chat', chatSchema);

export default class Chat {

    findAll(req, res) {
        model.find({}, {
            password: 0
        }, (err, users) => {
            if (err || !users) {
                res.sendStatus(403);
            } else {
                res.json(users);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, {
            password: 0
        }, (err, user) => {
            if (err || !user) {
                res.sendStatus(403);
            } else {
                res.json(user);
            }
        });
    }

    create(req, res) {
        // if (req.body.password) {
        //     var salt = bcrypt.genSaltSync(10);
        //     req.body.password = bcrypt.hashSync(req.body.password, salt);
        // }
        model.create(req.body,
            (err, user) => {
                if (err || !user) {
                    if (err.code === 11000 || err.code === 11001) {
                        err.message = "Email " + req.body.email + " already exist";
                    }
                    res.status(500).send(err.message);
                } else {

                    // let tk = jsonwebtoken.sign(user, token, {
                    //     expiresIn: "24h"
                    // });
                    res.json({
                        success: true,
                        user: user,
                    });
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, req.body, (err, user) => {
            if (err || !user) {
                res.status(500).send(err.message);
            } else {
                let tk = jsonwebtoken.sign(user, token, {
                    expiresIn: "24h"
                });
                res.json({
                    success: true,
                    user: user,
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
