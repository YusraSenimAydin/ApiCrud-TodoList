document.addEventListener("DOMContentLoaded", function () {

    getApi();

    document.getElementById("inputDiv").addEventListener("keypress", (e) => {
        if (e.keyCode === 13) {
            alert("haha");
            yeniToDoEkle();
        }
    });
});


function getApi() {
    var url = 'http://127.0.0.1:3000/api/toDoList';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            todolarEkle(data);
        })
        .catch(err => console.log(err));

}

function todolarEkle(data) {
    alert("todolarekle");
    data.forEach(function (item) {
        todoEkle(item);
    });
}

function todoEkle(toDo) {
    var yeniTodo = `<li class="todolarimiz"> ${toDo.toDo} <span> <i class="fa fa-trash-o" aria-hidden="true"></i> </span> </li>`

    if (toDo.case == true) {
        document.querySelector(yeniTodo).classList.add("completed");
    }
    document.querySelector('.todoList').appendChild(yeniTodo);
}

async function yeniToDoEkle() {

    var gelenTodo = document.querySelector('#inputDiv').value;
    fetch('http://127.0.0.1:3000/api/toDoList', {
            method: 'POST',
            body: JSON.stringify({
                toDo: gelenTodo
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((yeniTodo) => {
            todoEkle(yeniTodo);
            document.querySelector('#inputDiv').value = '';
        })
        .catch(err => console.log(err))
}