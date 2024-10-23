const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const addBtn = document.getElementById("addBtn");

function createElement(el, text, classNm) {
  let element = document.createElement(el);
  if (text !== undefined && text !== "") {
    element.innerHTML = text;
  }
  if (classNm !== undefined && classNm !== "") {
    element.classList.add(classNm);
  }
  return element;
}

function bindingChildWithParent(parent,child){
  parent.appendChild(child)
}

function addTodoList() {
  let inputText = todoInput.value;
  const li = createElement("li", "", "todoItem");
  let p = createElement("p", inputText, "flex-1");
  bindingChildWithParent(li,p)
  const editBtn = createElement("button", "Edit", "editBtn");
  bindingChildWithParent(li,editBtn)
  const deleteBtn = createElement("button", "Delete", "deleteBtn");
  bindingChildWithParent(li,deleteBtn)
  // binding li with todo list
  bindingChildWithParent(todoList,li)
  todoInput.value = "";
  todoInput.focus();
}

addBtn.addEventListener("click", addTodoList);
