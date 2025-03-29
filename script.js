// Seleção de elementos = Seleciona os elementos do HTML para serem salvos no JS
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue;
// Funções
const saveTodo = (text) => {
    //criando os elementos HTML de novo
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn);

    //FIM do criando os elementos HTML de novo

    //o 'todoList' é o elemento pai e o 'todo' é um elemento filho sendo adicionado.
    todoList.appendChild(todo);

    // Adicionando a linha de divisão <hr> após a nova tarefa
    const hr = document.createElement("hr");
    todoList.appendChild(hr);


    //para esvaziar o input
    todoInput.value = "";

    //para voltar o cursor para o input e voltar a escrever
    todoInput.focus();
}


// Função para alternar entre os formulários
const toggleForms = () => {
    // Altera a visibilidade dos formulários
    editForm.classList.toggle("hide"); // Mostra ou esconde o formulário de edição
    todoForm.classList.toggle("hide"); // Mostra ou esconde o formulário de adicionar tarefa
    todoList.classList.toggle("hide");
};

const updateTodo = (text) => {

    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");

        if (todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text; // Atualiza o título da tarefa com o novo texto
        }
    }
    )
}


// Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue);
    }

})

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle = "";

    if (parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done");
    }

    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove();
    }

    if (targetEl.classList.contains("edit-todo")) {
        toggleForms(); // Alterna entre os formulários

        editInput.value = todoTitle; // Define o valor da tarefa no formulário de edição
        oldInputValue = todoTitle; // Salva o valor antigo para atualizar depois
    }
})

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms(); // Alterna para o formulário de adicionar novamente
});


editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const editInputValue = editInput.value;

    if (editInputValue) {
        //atualizar
        updateTodo(editInputValue);
    }

    toggleForms();
})