const inputBox = document.getElementById("input");
const listContainer = document.querySelector(".list-container");
const resetBtn = document.querySelector(".btn-reset");
console.log(listContainer);

function addTask() {
  if (inputBox.value === "") {
    alert("Kamu belum mengisi listnya !");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `${inputBox.value} <span class="delete" onclick='del(e)'>x</span>`;
    listContainer.appendChild(li);
    console.log(inputBox.value);
    inputBox.value = "";
    saveData();
  }
}
const del = (e) => {
  e.parentElement.remove();
};
inputBox.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    addTask();
    saveData();
  }
});

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
    saveData();
  } else if (e.target.tagName === 'SPAN'){
    e.target.parentElement.remove()
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}
function removeData() {
  localStorage.removeItem("data");
  showTasks()
}

showTasks();
