var mongoose = require('mongoose');
var Poll = mongoose.model('Poll')

module.exports = {
  index: function(req, res) {
    Poll.find({}, function(err, notes) {
      res.json({
        'polls': polls
      });
    })
  },

  create: function(req, res) {
    console.log("express create method");
    console.log(req.body);
    var poll = new Poll({
      question: req.body.question,
      option_1: req.body.option_1,
      option_2: req.body.option_2,
      option_3: req.body.option_3,
      option_4: req.body.option_4,
      // content: 5, //error
      created_at: new Date()
    });
    poll.save(function(err) {
      if (err) {
        console.log('something went wrong');
        let errors = [];
        for (var key in err.errors) {
          errors.push(err.errors[key].message);
        }
        res.json({
          message: "Error",
          error: errors
        });
      } else {
        res.json({
          message: "Success",
          note: note
        });
      }
    })
  }
}
