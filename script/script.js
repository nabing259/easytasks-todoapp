const darkMode = document.querySelector("#darkmode");

darkMode.addEventListener('click', () => {
  document.body.classList.toggle('darkTheme');

  const isDarkMode = document.body.classList.contains('darkTheme');
  localStorage.setItem('darkIsOn', isDarkMode);
});

let applyDarkMode = () => {
  const isDarkMode = localStorage.getItem('darkIsOn');
  if (isDarkMode === 'true') {
    document.body.classList.add('darkTheme');
  }
  else{
    document.body.classList.remove('darkTheme');
  }
}
applyDarkMode();





document.querySelector("form").addEventListener("submit", myFunction);

let todoList = JSON.parse(localStorage.getItem("todoData")) || [];
function myFunction(){
    event.preventDefault();
   
    let name = document.querySelector("#taskname").value;
    let status = document.querySelector("#status").value;
    let prior = document.querySelector("#priority").value;

    let todoObj = {
        Name: name,
        Status: status,
        Prior: prior,
    };

    todoList.push(todoObj);
    localStorage.setItem("todoData", JSON.stringify(todoList));
    window.location.reload();
}

let todoItems = JSON.parse(localStorage.getItem("todoData"));
let completed = JSON.parse(localStorage.getItem("markCompleted")) || [];

todoItems.map(function(ele, ind){
    let tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${ind+1}</td>
    <td>${ele.Name}</td>
    <td id="current">${ele.Status} </td>
    <td>${ele.Prior}</td>
    `;

    let td = document.createElement("td");

    let mark = document.createElement("button");
    
    if(ele.Status == "Completed"){
        mark.setAttribute("id", "markPending");
        mark.innerText = "Mark As Pending";
        mark.addEventListener("click", function(){
            markAsPending(ele, ind);
        })
    }else{
        mark.setAttribute("id", "markCompleted");
        mark.innerText = "Mark As Completed";
        mark.addEventListener("click", function(){
            markAsCompleted(ele, ind);
        })
    }
    
    let remove = document.createElement("button");
    remove.setAttribute("id", "remove");
    remove.innerText = "Remove";

    td.append(mark, remove);
    tr.append(td);

    remove.addEventListener("click", function(){
        todoList.splice(ind, 1);
        localStorage.setItem("todoData", JSON.stringify(todoList));
        window.location.reload();
    })

    document.querySelector("tbody").append(tr);
})

function markAsCompleted(ele, ind){
    todoList[ind].Status = "Completed";
    localStorage.setItem("todoData", JSON.stringify(todoList));
    completed.push(ele);
    localStorage.setItem("markCompleted", JSON.stringify(completed));
    window.location.reload();
}

function markAsPending(ele, ind){
    todoList[ind].Status = "Pending";
    localStorage.setItem("todoData", JSON.stringify(todoList));
    completed.pop(ele);
    localStorage.setItem("markCompleted", JSON.stringify(completed));
    window.location.reload();
}



// Sorting the Tasks


