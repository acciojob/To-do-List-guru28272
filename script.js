//your code here
const btn = document.querySelector(`#addTodoBtn`);

const ol = document.querySelector(`#todoList`);

const input = document.querySelector(`#newTodoInput`);

btn.addEventListener(`click`, function () {
  if (input.value !== "") {
    ol.innerHTML = `<li>listItem</li>
  <li>listItem</li>
  <li>listItem</li>
  <li>listItem</li>`;
  }
});
