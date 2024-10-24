const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const addBtn = document.getElementById("addBtn");

let isEdit = null;

function createElement(el, text, classNm) {
  let element = document.createElement(el);
  if (text !== undefined && text !== "") {
    element.innerHTML = text;
  }
  if (classNm !== undefined && classNm !== "") {
    element.className = classNm;
  }
  return element;
}

function bindingChildWithParent(parent, child) {
  parent.appendChild(child);
}

function addTodoList() {
  let inputText = todoInput.value;
  if (inputText.length <= 0) {
    alert("input is empty");
    return false;
  }
  if(addBtn.innerHTML === "Save"){
    
  }
  else {
    const li = createElement("li", "", "todoItem");
    let p = createElement("p", inputText, "flex-1");
    bindingChildWithParent(li, p);
    const editBtn = createElement("button", "Edit", "editBtn");
    bindingChildWithParent(li, editBtn);
    const deleteBtn = createElement("button", "Delete", "deleteBtn");
    bindingChildWithParent(li, deleteBtn);
    // binding li with todo list
    bindingChildWithParent(todoList, li);
    todoInput.value = "";
    todoInput.focus();
  }
}

function editTodoList(e) {
  const event = e.target;
  if (event.innerHTML === "Delete") {
    event.parentNode.remove();
  }
  if(event.innerHTML === "Edit"){
    console.log('hello tanim')
    todoInput.value = event.previousElementSibling.innerHTML
    isEdit = event
  }
}

addBtn.addEventListener("click", addTodoList);
todoList.addEventListener("click", editTodoList);
