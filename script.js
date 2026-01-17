// 1. Elements ko select karein
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// 2. Task add karne ka function
function addTask() {
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');

    // Yahan humne do alag buttons rakhe hain
    li.innerHTML = `
        <span class="task-text">${taskValue}</span>
        <div class="actions">
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

// 3. Button click event
addBtn.addEventListener('click', addTask);

// 4. Complete aur Delete ka Logic
taskList.addEventListener('click', (e) => {
    // COMPLETE (CHECK) LOGIC
    if (e.target.classList.contains('complete-btn')) {
        const span = e.target.closest('li').querySelector('.task-text');
        
        // Isse text par line aa jayegi (Vanshika ko CSS mein .completed class banani hogi)
        span.classList.toggle('completed'); 
        
        // Button ka text badalne ke liye
        if (span.classList.contains('completed')) {
            e.target.innerText = "Undo";
        } else {
            e.target.innerText = "Complete";
        }
    }

    // DELETE LOGIC
    if (e.target.classList.contains('delete-btn')) {
        e.target.closest('li').remove();
    }
});