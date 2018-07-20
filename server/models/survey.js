var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
  //  content: String,
  question: {
    type: String,
    required: true,
    minlength: 8
  },
  option_1: {
    type: String,
    required: false,
    minlength: 3
  },
  option_2: {
    type: String,
    required: false,
    minlength: 3
  },
  option_3: {
    type: String,
    required: false,
    minlength: 3
  },
  option_4: {
    type: String,
    required: false,
    minlength: 3
  },
  created_at: Date
})
mongoose.model('Poll', PollSchema);
