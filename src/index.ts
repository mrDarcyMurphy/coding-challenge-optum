import './styles.css';

const todos = [];

const inputEl = document.getElementById('add-todo-input');
const todoItemsEl = document.getElementById('todo-items');
const completedItemsEl = document.getElementById('completed-items');

inputEl.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
  }
});

console.log('Got here')