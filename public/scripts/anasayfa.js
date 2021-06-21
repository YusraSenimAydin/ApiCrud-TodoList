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
    var url = 'http://localhost:3000/';
    fetch(url)
        .then(response => response.json())
        .then(data => todolarEkle(data))
        .catch(err => console.log(err));

}

function todolarEkle(data) {
    alert("todolarekle");
    data.forEach(item => todoEkle(item));
}

function todoEkle(toDo) {
    console.log(`todo: ${toDo.toDo}`);
    var yeniTodo = `<li class="todolarimiz"> ${toDo.toDo} <span> <i class="fa fa-trash-o" aria-hidden="true"></i> </span> </li>`

    if (toDo.case == true) {
        document.querySelector(yeniTodo).classList.add("completed");
    }
    document.querySelector('.todoList').append(yeniTodo);
}

async function yeniToDoEkle() {

    var gelenTodo = document.querySelector('#inputDiv').value;
    fetch('http://localhost:3000/', {
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