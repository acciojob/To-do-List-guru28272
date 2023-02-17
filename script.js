//your code here
const btn = document.querySelector(`#addTodoBtn`);

const ol = document.querySelector(`#todoList`);

const input = document.querySelector(`#newTodoInput`);


btn.addEventListener(`click`, function () {
  if (input.value !== "") {
	  const li = document.createElement('li')
  li.innerText = input.value;
	  ol.appendChild(li)
	  input.value=``;
  }
});

