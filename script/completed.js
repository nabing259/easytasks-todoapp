const darkMode = document.querySelector("#darkmode");

darkMode.addEventListener('click', () => {
  document.body.classList.toggle('darkTheme');

  const isDarkMode = document.body.classList.contains('darkTheme');
  localStorage.setItem('darkIsOn', isDarkMode);
  
  darkMode.innerText = isDarkMode ? "Light Mode" : "Dark Mode";
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