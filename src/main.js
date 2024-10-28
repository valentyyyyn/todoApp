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


// add task functionality

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

  
    newTask.classList.add("w-[100%]", "h-auto", "bg-white","dark:bg-[#1E1E1E]","text-2xl", "rounded-2xl", "shadow-md", "p-3", "mt-3");

   
    taskContainer.appendChild(newTask);

    addTaskInput.value = "";

    const errorMessage = mainSection.querySelector('.text-red-500');
    if (errorMessage) {

        errorMessage.remove();

    }

});

// complete and delete task functionality



