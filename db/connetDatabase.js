const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://yusradede:senim1234@todolist.ny1zh.mongodb.net/todolist?retryWrites=true&w=majority"


const connectDatabase = () => {
    mongoose.createConnection(MONGO_URI, {
            
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


    const connection = mongoose.connection;

    connection.once("open", function () {
        console.log("MongoDB database connection established successfully");
    });

}



module.exports = {
    connectDatabase
}