document.getElementById("btn_Add").addEventListener("click", CheckText);
document.querySelector(".Todo_text").addEventListener("keypress", EnterKey);
let listCheck = document.querySelectorAll(".Todo_checkbox");
let delButton = document.querySelectorAll(".Todo_del");
let Todo_text = document.querySelector(".Todo_text");
let list = document.querySelector(".List_Todo_ul");
let list_li = document.querySelectorAll(".List_Todo_li");

const TODOLIST_DATA = "toDoList";

function loadToDoList() {
  const loadedToDoList = localStorage.getItem(TODOLIST_DATA);
  if (loadedToDoList !== null) {
  }
}

function CheckText() {
  const err = "할일을 입력해주세요";
  if (!Todo_text.value) {
    alert(err);
  } else {
    AddDo();
    completeTodo();
    delTodo();
  }
}

function EnterKey(e) {
  if (e.key === "Enter") {
    CheckText();
  }
  completeTodo();
  delTodo();
}

function AddDo() {
  const newTodo = Todo_text.value;
  Todo_text.value = "";
  PaintTodo(newTodo);
}

function PaintTodo(newTodo) {
  let li = document.createElement("li");
  li.setAttribute("class", "List_Todo_li");
  li.innerHTML = `<input type="checkbox" class="Todo_checkbox" />
    <span class="item_in_box">${newTodo}</span>
    <button type="button" class="Todo_del">💩</button>`;
  list.appendChild(li);
}

function completeTodo() {
  listCheck = document.querySelectorAll(".Todo_checkbox");
  list_li = document.querySelectorAll(".List_Todo_li");
  listCheck.forEach((thisone, index) =>
    thisone.addEventListener("click", function () {
      if (thisone.checked === true) {
        list_li[index].style.textDecoration = "line-through";
        list_li[index].style.opacity = "0.3";
      } else {
        list_li[index].style.textDecoration = "none";
        list_li[index].style.opacity = "1";
      }
    })
  );
}

function delTodo() {
  delButton = document.querySelectorAll(".Todo_del");
  list_li = document.querySelectorAll(".List_Todo_li");

  delButton.forEach((delEl, index) =>
    delEl.addEventListener("click", function () {
      list_li[index].remove();
    })
  );
}

function init() {
  //loadToDoList();
  completeTodo();
  delTodo();
}

init();

