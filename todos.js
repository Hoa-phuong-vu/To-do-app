let todos = [];

const todosList = document.getElementById("todos"); 
function rendertodos() {
    todos.forEach((todo, i) => {
        let currentHTML = todosList.innerHTML;
        let newHTML = `
            <div class="todoItem">
                <p>${i + 1}${todo}</p>
            </div>
        `;
    })

};