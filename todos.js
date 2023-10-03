let todos = [];

const todosList = document.getElementById("todos"); 
const todoInput = document.getElementById("textInput");
const inputButton = document.getElementById("button");

function addTodo(e) {
    e.preventDefault()
    let textValue = todoInput.value
    todos.push(textValue)
    todosList.innerHTML = "" //resets the list so it doesn't print the same todos multiple times
    rendertodos()
}

inputButton.addEventListener("click", addTodo)

function rendertodos() {
    todos.forEach((todo, i) => {
        let currentHTML = todosList.innerHTML;
        let newHTML = `
            <div class="todoItem">
                <p>${i + 1}. ${todo}</p>
                <div class="actions">
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash-can"></i>
                </div>
            </div>
        `;

        let amendedHTML = currentHTML + newHTML
        todosList.innerHTML = amendedHTML
    })

};

rendertodos();