import mongoose from 'mongoose';


const commentSchema = new mongoose.Schema ({

pseudo : {
  type: String
},
comment : {
  type: String
},
date: {
  type: Date, default: Date.now
}


});
let model = mongoose.model('Comment', commentSchema);

export default class Comment {

  findAll(req, res) {
    model.find({}, (err, comments) => {
      if (err || !cocktails) {
        res.sendStatus(403);
      } else {
        res.json(comments);
      }
    });
  }

  create(req, res){
    model.create(req.body, (err,comments) => {
      if (err){
        res.status(500).send(err.message);
      } else {
        res.json({
          commentsend: comments
        });
      }

    });

    }


    findByDate(req, res){
      model.find({date:req.params.date
      } ,(err, date)=> {
        if (err || !date) {
          res.sendStatus(500);
        } else {
          res.json(date);
        }
      });
  }


}
