const todoForm = document.getElementById("to-do");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("to-do-list");

let todos = [];
const TODOS_KEY = "todos";

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deletTodo(event){
    const clieckedList = event.target.parentElement;
    clieckedList.remove();
    console.log(clieckedList.id);
    todos = todos.filter((todo)=> todo.id !== parseInt(clieckedList.id));
    console.log(clieckedList.id);
    saveTodos();
}

function paintTodo(list) {
    const li = document.createElement("li");
    li.id = list.id;
    const span = document.createElement("span");    
    span.innerText = list.text;
    const button = document.createElement("button");    
    button.innerText = "x";
    button.addEventListener("click", deletTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li); 
}

function handleTodoForm(event){
    event.preventDefault();
    const list = todoInput.value;
    todoInput.value = "";
    const listObj = {
        text: list,
        id: Date.now()
    }
    todos.push(listObj);
    paintTodo(listObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoForm);

const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos !== null) {
    const parsedTodo = JSON.parse(savedTodos);
    todos = parsedTodo;
    parsedTodo.forEach(paintTodo);
}