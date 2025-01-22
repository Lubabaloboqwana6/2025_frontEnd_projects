document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      return alert("Please enter a task");
    }

    const newTask = document.createElement("li");
    newTask.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button"><i class="fas fa-trash"></i></button>
        `;
    taskList.appendChild(newTask);
    taskInput.value = "";

    // Event listener to mark as complete
    newTask.addEventListener("click", (event) => {
      if (
        event.target !== newTask.querySelector(".delete-button") &&
        !event.target.classList.contains("fa-trash")
      ) {
        newTask.classList.toggle("completed");
      }
    });

    // Event listener to remove item
    const deleteButton = newTask.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
      newTask.remove();
    });
  }

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
