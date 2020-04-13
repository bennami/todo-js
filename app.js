//selector
const todoInput  = document.querySelector('.todo-input');
const todoButton  = document.querySelector('.todo-button');
const todoList  = document.querySelector('.todo-list');
const  filterOption = document.querySelector('.filter-todo');

//event listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


//functions
function addTodo (event){

  event.preventDefault();
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  const newToDo = document.createElement('li');
  newToDo.innerText = todoInput.value;
  newToDo.classList.add('todo-item');

  todoDiv.appendChild(newToDo);

  //check btn
    const completedButton  = document.createElement('button');
    completedButton.innerHTML = '<i  class="fas fa-check"> </i>';
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);

    //trash button
    const trashButton  = document.createElement('button');
    trashButton.innerHTML = '<i  class="fas fa-trash"> </i>';
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);

    //clear input after submit
    todoInput.value= "";

}

function deleteCheck(e) {
    const item = e.target;

    if(item.classList[0]=== "trash-button"){
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function(){
      todo.remove()
    });
    }

    if(item.classList[0]=== "complete-button"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}

function filterTodo(e) {

    const  todos  =  todoList.children;
    console.log(todos);
    todos.forEach(function(todo){
        switch(e.target.value){
            case  "all":
                todo.style.display = "flex";
                break;
            case  'completed':
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display= "none";
                }
                break;
            case 'uncompleted':
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display= "none";
                }

        }
    });

}