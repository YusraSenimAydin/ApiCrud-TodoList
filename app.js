var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

var yerlerRoutes = require('./routes/yerler');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.send("Normal Root Route");
});


app.use('/api/yerler', yerlerRoutes);


app.listen(port, () => {
    console.log("app is running on port " + port);
});