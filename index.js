const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const addBtn = document.getElementById("addBtn");

function createElement(el,text,classNm){
  let element = document.createElement(el);
  if (text !== undefined && text !== "") {
    element.innerHTML = text;
  }
  if (classNm !== undefined && classNm !== "") {
    element.classList.add(classNm);
  }
  return element;
}