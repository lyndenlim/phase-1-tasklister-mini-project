document.addEventListener("DOMContentLoaded", () => {
  const descriptionField = document.querySelector("#new-task-description")
  const dueDateField = document.querySelector("#newTaskDueDate")
  const form = document.querySelector("form")
  form.addEventListener("submit", e => {
    e.preventDefault();
    if (descriptionField.value === "" || dueDateField === "") {
      alert("Task/due date cannot be empty.")
    } else {
      buildToDoList(descriptionField.value, dueDateField.value);
      form.reset();
    }
  });
});

function buildToDoList(task, dueDate) {
  let listItem = document.createElement("li");
  let deleteBtn = document.createElement("button")
  let editBtn = document.createElement("button")
  let editInput = document.createElement("input")
  let prioritySelector = document.querySelector("#prioritySelector").value
  if (prioritySelector === "red") {
    listItem.style.color = "red"
  } else if (prioritySelector === "yellow") {
    listItem.style.color = "yellow"
  } else if (prioritySelector === "green") {
    listItem.style.color = "green"
  };
  listItem.textContent = `${task} by ${dueDate} `;
  deleteBtn.textContent = 'X'
  editBtn.textContent = "Edit"
  listItem.append(deleteBtn, editBtn)
  deleteBtn.addEventListener("click", deleteTask)
  editBtn.addEventListener("click", function () {
    editInput.value = `${task} by ${dueDate}`;
    listItem.append(editInput)
  })
  editInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      listItem.textContent = editInput.value;
      listItem.append(deleteBtn, editBtn);
    }
  })
  document.querySelector("#tasks").appendChild(listItem)
}

function deleteTask(e) {
  e.target.parentNode.remove()
}

