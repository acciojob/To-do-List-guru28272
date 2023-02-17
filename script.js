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
  if (input.value !== "") {
	  const li = document.createElement('li')
  li.innerText = input.value;
	  ol.appendChild(li)
	  input.value=``;
  }
});

