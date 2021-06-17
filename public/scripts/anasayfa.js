document.addEventListener("DOMContentLoaded", () => {
    var url = "http://127.0.0.1:3000/api/toDoList";

    fetch(url)
        .then(response => response.json())
        .then(todo =>
            console.log(todo)

        );
    document.getElementById("inputDiv").addEventListener("keypress", (e) => {
        if (e.keyCode === 13) {


        }
    });


});

function toDoAdd(todo) {
    todo.forEach(yer => {
        todoNew(yer);
    });
}

function todoNew(item) {
    var newtodo = `
    <li class="yerlerimiz"> ${item.toDo}  
    <span> <i class="fa fa-trash-o" aria-hidden="true"></i> </span> 
    </li>`;


    newtodo.data('id', item._id);
    console.log(item._id);

    if (item.createdDate == true) {
        newtodo.addClass("created");
    }
    document.getElementById("inputDiv").append(newtodo);
}