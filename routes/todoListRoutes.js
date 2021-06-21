var express = require('express'),
    router = express.Router(),
    toDo = require("../models/todoListModel");

// DB'de olan butun todoları JSON olarak gonder-todoları listele
router.get('/', (req, res) => {
        toDo.find({})
        .then((toDoListDB) => {
            res.json(toDoListDB);
        })
        .catch((err) => {
            console.log('============HATA/GET================');
            console.log(err);
            res.send(err);
        })
        console.log("geldiii/get");
  
});
// DB'ye yeni todo eklemek 
router.post('/', (req, res) => {
    console.log(req.body);
    toDo.create(req.body)
        .then((newTodo) => {
            res.status(201).json(newTodo);
        })
        .catch((err) => {
            console.log('============HATA/POST================');
            console.log(err);
            res.send(err);
        })
        console.log("geldiii/post");
});

//Show Route -  detayli bilgi 
router.get('/:toDoID', (req, res) => {
    toDo.findById(req.params.toDoID)
        .then((toDo) => {
            res.json(toDo);
        })
        .catch((err) => {
            console.log('============HATA/GET/DETAY================');
            console.log(err);
            res.send(err);
        });
});

//data update etmek istedigimizde 
router.put('/:toDoId', (req, res) => {
    toDo.findOneAndUpdate({
            _id: req.params.toDoId
        }, req.body, {
            new: true
        })
        .then((toDo) => {
            res.json(toDo);
        })
        .catch((err) => {
            console.log('============HATA/PUT================');
            console.log(err);
            res.send(err);
        })
});

//Silmek istedigimizde kullanacagimiz Route
router.delete('/:toDoId', (req, res) => {
    toDo.remove({
            _id: req.params.toDoId
        })
        .then(() => {
            res.json({
                message: 'Task successfully deleted'
            })
        })
        .catch((err) => {
            console.log('============HATA/DELETE================');
            console.log(err);
            res.send(err);
        })
});

module.exports = router;