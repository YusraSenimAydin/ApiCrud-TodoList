document.addEventListener("DOMContentLoaded", function () {
    var url = 'http://localhost:3000/todoList';
    fetch(url)
        .then(response => response.json())
        .then(data => todolarEkle(data))
        .catch(err => console.log(err));

    document.getElementById("inputDiv").addEventListener("keypress", (e) => {
        if (e.keyCode === 13) {
            yeniToDoEkle();
        }
    });

    document.querySelector("ul").addEventListener("click", function (e) {
        var el = e.target;
        if (el.className == "fa fa-trash-o") {
            el.parentNode.parentNode.remove();
        }

    })

});

function todolarEkle(toDolar) {
    toDolar.forEach(item => {
        console.log(item)
        todoEkle(item)
    });
}

function todoEkle(toDo) {
    console.log(`todo: ${toDo.toDo}`);
    const todolist = document.getElementById('todoList');
    todolist.innerHTML += `<li class="todolarimiz">${toDo.toDo} <span> <i class="fa fa-trash-o" aria-hidden="true"></i> </span> </li>`
}

function yeniToDoEkle() {

    var gelenTodo = document.querySelector('#inputDiv').value;


    fetch('http://localhost:3000/todoList', {
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
            console.log("post:" + yeniTodo.toDo);
            todoEkle(yeniTodo);
            document.querySelector('#inputDiv').value = '';
        })
        .catch(err => console.log(err))

}