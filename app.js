var express         = require('express'),
    app             = express(),
    port            = process.env.PORT || 3000,
    cors = require('cors'),
    bodyParser      = require('body-parser'),
    path            = require('path');

var toDoListRoutes = require('./routes/todoListRoutes');
var corsOptions = {
    origin: 'http://127.0.0.1:3000/api/toDoList',
    optionsSuccessStatus: 200, 
    methods: "GET, PUT, DELETE, POST"
}

app.use(cors(corsOptions))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public/stylesheets/'));
app.use(express.static(__dirname + '/public/scripts/'));



app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+'public/main/anasayfa.html'));
});

app.use('/api/toDoList', toDoListRoutes);

app.listen(port, ()=>{
    console.log('App is running on port : ' + port);
});



