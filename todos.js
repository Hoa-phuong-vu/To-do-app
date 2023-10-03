let todos = [];

const todosList = document.getElementById("todos"); 
const todoInput = document.getElementById("textInput");
const inputButton = document.getElementById("button");
const showAddTodo = document.getElementById("showAddTodo");
const enterTodo = document.getElementById('enterTodo')

//show add todo 
function showTodoInput() {
    enterTodo.style.display = "block"
}

showAddTodo.addEventListener("click", showTodoInput)

//add todos
function addTodo(e) {
    e.preventDefault()
    let textValue = todoInput.value
    todos.push(textValue)
    todosList.innerHTML = "" //resets the list so it doesn't print the same todos multiple times
    rendertodos()
    todoInput.value = ""
    enterTodo.style.display = "none"
}

inputButton.addEventListener("click", addTodo)

//remove todos
function removeTodos(index) {
    todos = todos.filter((todo, i) => {
        return i === index ? false : true
    })
    todosList.innerHTML = ""    
    rendertodos()
}

//edit todos
function editTodos(index) {
    const currElementText = document.querySelector(`#todos div:nth-child(${index + 1}) p`).innerText
    const spliceText = currElementText.slice(3)
    removeTodos(index)
    todoInput.value = spliceText
    showTodoInput()
}


//labeling and displaying the todos
function rendertodos() {
    todos.forEach((todo, i) => {
        let currentHTML = todosList.innerHTML;
        let newHTML = `
            <div class="todoItem">
                <p>${i + 1}. ${todo}</p>
                <div class="actions">
                    <i onclick="editTodos(${i})" class="fa-solid fa-pen"></i>
                    <i onclick="removeTodos(${i})" class="fa-solid fa-trash-can"></i>
                </div>
            </div>
        `;

        let amendedHTML = currentHTML + newHTML
        todosList.innerHTML = amendedHTML
    })

};

rendertodos();