document.addEventListener("DOMContentLoaded", function () {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const body = document.body;

  themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");
    if (themeIcon.src.includes("sun.png")) {
      themeIcon.src = "images/moon.png";
    } else {
      themeIcon.src = "images/sun.png";
    }
  });

  const taskForm = document.getElementById("task-form");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;
      li.className = "task-item start";

      const taskBtn = document.createElement("button");
      taskBtn.textContent = "To Do";
      taskBtn.className = "task-btn start";
      taskBtn.onclick = function () {
        if (taskBtn.classList.contains("start")) {
          taskBtn.textContent = "Done";
          taskBtn.classList.remove("start");
          taskBtn.classList.add("finish");
          li.classList.remove("start");
          li.classList.add("finish");
        } else if (taskBtn.classList.contains("finish")) {
          taskBtn.textContent = "Delete";
          taskBtn.classList.remove("finish");
          taskBtn.classList.add("delete");
          li.classList.remove("finish");
          li.classList.add("delete");
        } else if (taskBtn.classList.contains("delete")) {
          li.remove();
        }
      };
      li.appendChild(taskBtn);

      taskList.appendChild(li);
      taskInput.value = "";
    }
  });
  taskInput.addEventListener("input", function () {
    const inputValue = this.value;
    let maxLength = 50;

    if (/^[A-ZА-Я]*$/.test(inputValue)) {
      maxLength = 35;
    }

    this.maxLength = maxLength;
  });
});
