document.addEventListener("DOMContentLoaded", () => {

  const formSubmit = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');
  

  formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTask = e.target.querySelector('#new-task-description').value;
    const taskItem = document.createElement('li');

    taskItem.textContent = newTask;
    taskList.append(taskItem)
    
  });

  
});
