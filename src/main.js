// dark and light mode

const themeSwitchButton = document.getElementById('theme_switch');

if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
    themeSwitchButton.innerText = 'Light Mode'; 
} else {
    document.documentElement.classList.remove('dark');
    themeSwitchButton.innerText = 'Dark Mode'; 
}

themeSwitchButton.addEventListener('click', (e) => {

    document.documentElement.classList.toggle('dark');

    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        themeSwitchButton.innerText = 'Light Mode'; 
    } else {
        localStorage.setItem('theme', 'light');
        themeSwitchButton.innerText = 'Dark Mode'; 
    }

});


// tasks functionality

const addTaskButton = document.getElementById('add_task_button');
const addTaskInput = document.getElementById('add_task_input'); 

addTaskButton.addEventListener('click', (e) => {

    const taskContainer = document.getElementById('task_container');
    const mainSection = document.getElementById('main');
    
    const newTask = document.createElement('div');
    newTask.textContent = addTaskInput.value.trim();  

    if (newTask.textContent === "") {

        const invalidTask = document.createElement('p');
        invalidTask.innerText = "Please enter a task.";
        invalidTask.classList.add('text-red-500', 'text-xl', 'text-center');


        if (!mainSection.querySelector('.text-red-500')) {
            mainSection.appendChild(invalidTask);
        }
        return; 
    }

  
    newTask.classList.add("w-[100%]", "h-auto", "bg-white","dark:bg-[#1E1E1E]","text-2xl","flex","justify-between", "rounded-2xl", "shadow-md", "p-3", "mt-3");

   
    taskContainer.appendChild(newTask);

    addTaskInput.value = "";

    const errorMessage = mainSection.querySelector('.text-red-500');
    if (errorMessage) {

        errorMessage.remove();

    }

    // delete task functionality

    deleteTask(newTask);
    completeTask(newTask);

});



// functions

function deleteTask(newTask) {
    const deleteTaskButton = document.createElement('img');
    deleteTaskButton.src = "./src/icons/task-delete.svg";
    deleteTaskButton.alt = "Delete task"; 
    deleteTaskButton.style.cursor = 'pointer';
    deleteTaskButton.classList.add("hover:scale-105","transition-transform","self-end", "ease-in-out");
    newTask.appendChild(deleteTaskButton); // Aquí agregas el elemento a 'newTask'

    deleteTaskButton.addEventListener('click', (e) => {
        newTask.remove(); // Elimina 'newTask' del DOM
    });
}

function completeTask(newTask) {
    const completeTask = document.createElement('img');
    completeTask.src = "./src/icons/task-complete.svg";
    completeTask.alt = "Complete task"; 
    completeTask.style.cursor = 'pointer';
    completeTask.classList.add("hover:scale-105","transition-transform", "ease-in-out");
    newTask.appendChild(completeTask); // Aquí agregas el elemento a 'newTask'

    completeTask.addEventListener('click', (e) => {
        if (newTask.classList.contains("line-through")) {
            newTask.classList.remove("line-through");
        }
        newTask.classList.add("line-through")
    });
}