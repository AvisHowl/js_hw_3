let task = document.querySelector(".text-input");
let button = document.querySelector(".button");
let taskList = document.querySelector(".task-list");
let error = document.querySelector(".error");

button.addEventListener("click", function () {
	if (task.value === "") {
		error.style.display = "block";
	} else {
		error.style.display = "none";
		let newTask = document.createElement("li");
		newTask.textContent = task.value;
		taskList.append(newTask);
		task.value = "";
		newTask.addEventListener("click", function () {
			newTask.classList.toggle("done");
		});
	}
});
