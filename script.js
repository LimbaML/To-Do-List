document.addEventListener('DOMContentLoaded', loadTasks);

        function addTask() {
            var inputElement = document.getElementById('taskInput');
            var taskListElement = document.getElementById('taskList');

            if (inputElement.value.trim() !== '') {
                var taskItem = document.createElement('li');
                taskItem.innerHTML = `
                    <span>${inputElement.value}</span>
                    <button onclick="markAsCompleted(this)">Completed</button>
                    <button onclick="deleteTask(this)">Delete</button>
                `;

                taskListElement.appendChild(taskItem);

                saveTasks();

                inputElement.value = '';
            }
        }

        function deleteTask(button) {
            var taskItem = button.parentNode;
            taskItem.remove();

            saveTasks();
        }

        function markAsCompleted(button) {
            var taskItem = button.parentNode;
            taskItem.classList.toggle('completed');

            saveTasks();
        }

        function handleKeyPress(event) {
            if (event.key === 'Enter') {
                addTask();
            }
        }

        function saveTasks() {
            var taskListElement = document.getElementById('taskList');
            localStorage.setItem('tasks', taskListElement.innerHTML);
        }

        function loadTasks() {
            var taskListElement = document.getElementById('taskList');
            var savedTasks = localStorage.getItem('tasks');

            if (savedTasks) {
                taskListElement.innerHTML = savedTasks;
            }
        }

