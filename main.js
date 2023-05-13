import { toDoList } from "./src/js/template"

const input = document.querySelector('#input')
const createBtn = document.querySelector('#create')
const todosWrapper = document.querySelector('#todos-wrapper')

const api = 
"https://todo-listt-13f4c-default-rtdb.asia-southeast1.firebasedatabase.app/todos"

// EVENTS
createBtn.addEventListener('click', createTodo)
window.addEventListener('load', fetchTodos)

// FUNCTIONS
// post
async function createTodo() {
  const value = input.value.trim();
  if (!value) return;
  
  const res = await fetch(`${api}.json`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      task: value,
    })
  });
  const data = await res.json();
  input.value = '';
  
}

//get
async function fetchTodos(){
  const res = await fetch( `${api}.json`);
  const data = await res.json();
  for(let key in data){
    todosWrapper.innerHTML += toDoList(data[key])
  }
}