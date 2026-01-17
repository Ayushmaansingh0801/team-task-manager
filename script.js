// Step 1: HTML elements ko pakdo
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Step 2: Add button par click event
addBtn.addEventListener("click", function () {

  // Step 3: Input se value lo
  const taskText = taskInput.value.trim();

  // Step 4: Empty task check
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Step 5: List item banao
  const li = document.createElement("li");

  // Step 6: Task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Step 7: Complete task (click)
  span.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  // Step 8: Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // Step 9: Sabko jodo
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Step 10: Input clear
  taskInput.value = "";
});

