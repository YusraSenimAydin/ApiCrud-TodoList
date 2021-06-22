// const todolist = document.getElementById("todolist");

// fetch('http://localhost:3000/', {
//         method: 'GET',
//         headers: {
//             "Content-type": "application/json;charset=UTF-8"
//         }
//     })
//     .then(response => response.json())
//     .then((gelenTodo) => {
//         alert("asad")

//         todoEkle(gelenTodo);
//     })
//     .catch(err => console.log(err))

document.getElementById("inputDiv").addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        alert("haha");
        yeniToDoEkle();
    }
});



//function todoEkle(gelenTodo) {
  //  console.log(gelenTodo.toDo);
   // const todolist = document.getElementById("todolist");

    // var yeniTodo = '<li class="todolarimiz">'+toDo.toDo +' <span> <i class="fa fa-trash-o" aria-hidden="true"></i> </span> </li>';

    // if (toDo.case == true) {
    //     document.querySelector(yeniTodo).classList.add("completed");
    // }

 //   todolist.innerHTML = `<li class="todolarimiz">${gelenTodo.toDo}<span> <i class="fa fa-trash-o" aria-hidden="true"></i> </span> </li>`;



    // const taskDiv = document.createElement('div');
    // taskDiv.classList.add('task-div');

    // const taskLi = document.createElement('li');
    // taskLi.classList.add('task-li');
    // taskLi.innerText = gelenTodo.toDo;
    // taskDiv.appendChild(taskLi);

    // const taskTamamBtn = document.createElement('button');
    // taskTamamBtn.classList.add('task-btn');
    // taskTamamBtn.classList.add('task-btn-tamamlandi');
    // taskTamamBtn.innerHTML = '<i class="far fa-check-square"></i>';
    // taskDiv.appendChild(taskTamamBtn);

    // const taskSilBtn = document.createElement('button');
    // taskSilBtn.classList.add('task-btn');
    // taskSilBtn.classList.add('task-btn-sil');
    // taskSilBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
    // taskDiv.appendChild(taskSilBtn);

    // todolist.appendChild(taskDiv);
 
function yeniToDoEkle() {

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
        .then((gelenTodo) => {
              
           todoEkle(gelenTodo)

        })
        .catch(err => console.log(err))
}
function todoEkle(gelenTodo) {

    const todoDiv=document.getElementById('todoDiv');
    todoDiv.innerHTML= "";
    var todoLi = document.createElement("li");
    todoLi.classList.add("todolarimiz");
    console.log(todoLi);
    todoLi.innerHTML = `    
    ${gelenTodo.toDo}
    <span> <i class="fa fa-trash-o" aria-hidden="true"></i> </span> 
    `;


}