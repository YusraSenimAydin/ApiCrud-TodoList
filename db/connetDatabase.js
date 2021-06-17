const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const connectDatabase = () => {
    mongoose.createConnection(process.env.MONGO_URI, {
        useMongoClient: true,
        useNewUrlParser: true,            
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
            
        })    
        .then(() => {
            console.log("Mongodb Connection Successful");
        })
        .catch(err => {
            console.error('Error in DB connection: ' + err);
        })
    
}



module.exports = {
    connectDatabase
}