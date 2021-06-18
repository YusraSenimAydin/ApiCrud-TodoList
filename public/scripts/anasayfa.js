document.addEventListener("DOMContentLoaded", function () {
    var url = 'http://127.0.0.1:3000/';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            todolarEkle(data);
        })

    document.getElementById("inputDiv").addEventListener("keypress", (e) => {
        if (e.keyCode === 13) {
            alert("haha");
            yeniToDoEkle();
        }
    });

   
});

function todolarEkle(datalar) {
    console.log(datalar);
    datalar.forEach(function (item) {
        todoEkle(item);
    });
}

function todoEkle(toDo) {
    var yeniTodo = `<li class="todolarimiz"> ${toDo.toDo } <span> <i class="fa fa-trash-o" aria-hidden="true"></i> </span> </li>`     
    yeniTodo.data('id', toDo._id);  

    if (toDo.case == true) {
        document.querySelector(yeniTodo).classList.add("completed");
    }
    document.querySelector('.todoList').appendChild(yeniTodo);
}

async function yeniToDoEkle(e) {

    var yeniTodo = document.querySelector('#inputDiv').value;

    var response = await fetch('http://127.0.0.1:3000/api/toDoList', {
        method: 'POST',
        body: JSON.stringify({
            toDo: yeniTodo
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const sonuc = await response.json();
    console.log(sonuc);
    //document.querySelector('.todoList').appendChild(sonuc.toDo);
}