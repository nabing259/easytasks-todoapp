const completedTasks = JSON.parse(localStorage.getItem("markCompleted"));

completedTasks.map((ele, ind) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${ind+1}</td>
    <td>${ele.Name}</td>
    <td>${ele.Prior}</td>
    `;

    document.querySelector("tbody").append(tr);
})