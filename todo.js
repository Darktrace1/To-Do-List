document.getElementById("btn_Add").addEventListener("click", CheckText);
document.querySelector(".Todo_text").addEventListener("keypress", EnterKey);
const Todo_text = document.querySelector(".Todo_text");
const list = document.querySelector(".List_Todo_ul");

function CheckText() {
  const err = "할일을 입력해주세요";
  if (!Todo_text.value) {
    alert(err);
  } else {
    AddDo();
  }
}

function EnterKey(e) {
  if (e.key === "Enter") {
    CheckText();
  }
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

const thisTodo = document.get(".Todo_checkbox");

thisTodo.addEventListener("click", function () {
  // for(let i = 0; i < )
  alert("Hello");
});

// function init() {}

// init();
