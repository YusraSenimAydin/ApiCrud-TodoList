document.addEventListener("DOMContentLoaded",  async function () {
    var response= await fetch("http://localhost:3000/todoList/getTado")
    var data=await response.json()
    await todolarEkle(data)

    document.getElementById("inputDiv").addEventListener("keypress", (e) => {
        if (e.keyCode === 13) {
            yeniToDoEkle();
        }
    });


});
 function  removeElement(id){
    event.stopPropagation();
    var url = `http://localhost:3000/todoList/delete/`+id;
    var el=event.target
    fetch(url)
        .then(response => response.json())
        .then(() => {
            el.parentNode.parentNode.remove()
        });
}
 function addClassTodo(id){
    var liTodo=document.getElementById(id);
    if (liTodo.classList[1] == "completed"){
        liTodo.classList.remove('completed')
    }
    else {
        liTodo.classList.add('completed')
    }

}

function todolarEkle(toDolar) {
    toDolar.forEach(item => {
        todoEkle(item)
    });
}

 function todoEkle(toDo) {
    const todolist = document.getElementById('todoList');
    todolist.innerHTML += `<li class="todolarimiz" onclick="addClassTodo('${toDo._id}')" id="${toDo._id}">${toDo.toDo} <span> <i class="fa fa-trash-o" aria-hidden="true" onclick="removeElement('${toDo._id}')"></i> </span> </li>`
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
            todoEkle(yeniTodo);
            document.querySelector('#inputDiv').value = '';
        })
        .catch(err => console.log(err))

}