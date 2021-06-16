var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:3000/api/toDoList');
mongoose.set('debug', true);

mongoose.Promise = Promise;
var toDoSchema = new mongoose.Schema({
    toDo:{
        type:String,
        required: 'Bos olamaz'
    },
    case: {
        type:Boolean,
        default: false
    },
    createdDate:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('toDo', toDoSchema);