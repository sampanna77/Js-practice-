document.addEventListener("DOMContentLoaded" , () =>{

let list  = document.getElementById("list-items");
let addtask = document.getElementById("additem");
let inputtext = document.getElementById("value");

let  tasks =   JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(task  => {
  render(task)
});
addtask.addEventListener("click", () =>{
  let text = inputtext.value.trim();
if(text === "") return ; 
  const newtask = {
    id  : Date.now(),
    work : text,
    completed : false
  }

  tasks.push(newtask);
  store()
  render(newtask)
  inputtext.value = ""
console.log(tasks)
})

function store()
{
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render(task){
let li = document.createElement("li");
li.setAttribute("data-id", task.id)
li.innerHTML = `<span> ${task.work}
</span>
<button> Delete </button>`

if(task.completed){
  li.classList.add("completed")
}
li.addEventListener("click", (e) => {
if (e.target.tagName === "BUTTON") {
e.stopImmediatePropagation()
  tasks = tasks.filter(t => t.id !== task.id)
  li.remove();
  store();
} 
else {
task.completed = !task.completed;
li.classList.toggle("completed");
store();
}
})
 list.appendChild(li)
}
})