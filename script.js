//your code here
const btn = document.querySelector(`#addTodoBtn`);

const ol = document.querySelector(`#todoList`);

const input = document.querySelector(`#newTodoInput`);

const listItem = document.createElement(`li`);
listItem.innerHTML = `<li>listItem</li>
  <li>listItem</li>
  <li>listItem</li>
  <li>listItem</li>`;

btn.addEventListener(`click`, function () {
  ol.appendChild(listItem);
});

btn.addEventListener(`mousedown`, function () {
  if (input.value !== "") {
    ol.appendChild(listItem);
  }
});

btn.addEventListener(`mouseup`, function () {
  input.value = "";
});

console.log(ol.contains(listItem));