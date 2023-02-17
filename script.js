//your code here
const btn = document.querySelector(`#addTodoBtn`);

const ol = document.querySelector(`#todoList`);

const input = document.querySelector(`#newTodoInput`);

btn.addEventListener(`mousedown`, function () {
  if (input.value !== "") {
    ol.innerHTML = `<li>listItem</li>
  <li>listItem</li>
  <li>listItem</li>
  <li>listItem</li>`;
  }
});
btn.addEventListener(`mouseup`, function () {
  input.value = "";
});