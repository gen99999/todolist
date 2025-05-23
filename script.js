const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const filter = document.getElementById('filter');

addBtn.addEventListener('click', addTask);
filter.addEventListener('change', filterTasks);
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;

  const btnGroup = document.createElement('div');
  btnGroup.className = 'task-buttons';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✓';
  completeBtn.className = 'complete-btn';
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
    filterTasks();
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => li.remove();

  btnGroup.appendChild(completeBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);
  taskList.appendChild(li);
  taskInput.value = '';
}

function filterTasks() {
  const tasks = taskList.childNodes;
  tasks.forEach(task => {
    if (!task.tagName) return;
    switch (filter.value) {
      case 'all':
        task.style.display = 'flex';
        break;
      case 'completed':
        task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
        break;
      case 'uncompleted':
        task.style.display = !task.classList.contains('completed') ? 'flex' : 'none';
        break;
    }
  });
}
