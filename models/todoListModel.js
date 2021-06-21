var mongoose = require('mongoose');
var Schema = mongoose.Schema;


mongoose.Promise = Promise;
var toDoSchema = new Schema({
    toDo:{
        type:String,
        required: 'Bos olamaz'
    },
    case:{
        type:Boolean,
        default: false
    },
    createdDate:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('toDo', toDoSchema);