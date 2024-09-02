let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput) {
        tasks.push(taskInput);
        document.getElementById('taskInput').value = '';
        displayTasks();
    } else {
        alert('please enter a task.');
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task,index) => {
        const li = document.createElement('li');
        li.textContent = task;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeTask(index);
        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

document.addEventListener("DOMContentLoaded", function() {

    const toggleButton = document.getElementById('toggleMode');
    const body = document.body;

    const currentMode = localStorage.getItem('mode');

    if (currentMode) {
        body.classList.add(currentMode);
    }

    toggleButton.addEventListener('click', function() {
        
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark-mode');
        } else if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('mode', 'light-mode'); 
        } else {
            body.classList.add('light-mode');
            localStorage.setItem('mode', 'light-mode');
        }
    });
});