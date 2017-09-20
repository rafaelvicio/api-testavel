var mongoose = require('mongoose');

var schema = mongoose.Schema({

  titulo: {
    type: String,
    required: true
  },
  corpo: {
    type: String,
    required: true
  }

});

mongoose.model('Artigo', schema);
