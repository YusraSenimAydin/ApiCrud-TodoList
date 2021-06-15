var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yemekler-api');
mongoose.set('debug', true);

mongoose.Promise = Promise;
//Above code explanation -- To be able to use db.yemek.find().then blabla, so to be able to use promises.

var yerSchema = new mongoose.Schema({
    isim:{
        type:String,
        required: 'Isim bos olamaz'
    },
    ziyaret: {
        type:Boolean,
        default: false
    },
    olusturulmaTarihi:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Yer', yerSchema);