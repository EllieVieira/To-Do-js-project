// Seleção de elementos = Seleciona os elementos do HTML para serem salvos no JS
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector  ("#cancel-edit-btn")

// Funções
const saveTodo = (text) => {
    //criando os elementos HTML de novo
    const todo = document.createElement(!"div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)
    
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)

    //FIM do criando os elementos HTML de novo

    //appendChild é um método do JavaScript usado para adicionar um novo nó (elemento) como filho de outro nó (elemento). No caso o 'todoList' é o elemento pai e o 'todo' é um elemento filho sendo adicionado.
    todoList.appendChild(todo)

    //para esvaziar o input
    todoInput.value = ""
    
    //para voltar o cursor para o input e voltar a escrever
    todoInput.focus ()

}


// Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value 

    if(inputValue){
        saveTodo(inputValue)
    }
    
})