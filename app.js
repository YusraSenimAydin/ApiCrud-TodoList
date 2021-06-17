var express = require('express'),
    dotenv = require("dotenv"),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    path = require('path'),
    connectDatabase = require("./db/connetDatabase");

var corsOptions = {
    origin: 'http://127.0.0.1:3000',
    optionsSuccessStatus: 200,
    methods: "GET, PUT, DELETE, POST"
}

// Environment Variables
dotenv.config({
    path: "./config/config.env"
});
var toDoListRoutes = require('./routes/todoListRoutes');

// MongoDb Connection
connectDatabase.connectDatabase();

var app = express();
var port= process.env.PORT || 3000;


app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors(corsOptions));

app.use(express.static(__dirname + '/public/stylesheets/'));
app.use(express.static(__dirname + '/public/scripts/'));
app.use(express.static(__dirname + '/public/main/'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/main', 'anasayfa.html'));
});

app.use('/', toDoListRoutes);

app.listen( port, () => {
    console.log(`App Started on ${port} : ${process.env.NODE_ENV}`);
});