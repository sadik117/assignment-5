// Theme Changer
document.getElementById("theme-changer").addEventListener("click", function () {
    const colors = ["indigo", "orange", "tomato", "teal", "violet"];
    const randomNumber = Math.random() * 5;
    const index = Math.round(randomNumber);
    const color = colors[index];
    document.body.style.backgroundColor = color;
  });

//   Time table

const displayTime = document.querySelector(".display-time");
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour24: false });
  setTimeout(showTime, 1000);
}
showTime();

function updateDate() {
  let today = new Date();
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

  const months = [ "January", "February", "March", "April",  "May", "June", "July", "August","September", "October", "November", "December",
  ];
  const dayWeek = [ "Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
  ];
  
  const allId = ["day", "daynum", "month", "year"];
 
  const val = [dayWeek[dayName], dayNum, months[month], year];
  for (let i = 0; i < allId.length; i++) {
    document.getElementById(allId[i]).firstChild.nodeValue = val[i];
  }
}
updateDate();

// Window changer
  
  document.getElementById("discover-btn").addEventListener("click", function () {
    window.location.href = "blog.html";
  });
  
// Button click

  const buttons = document.querySelectorAll(".complete-btn");
  for (i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
  
  btn.addEventListener("click", function(event){
        alert("Board Updated Successfully");
        event.target.disabled = true;
        const assignedTasks =  document.getElementById("tasks");
        assignedTasks.innerText = parseInt(assignedTasks.innerText) - 1;

        const doneTasks = document.getElementById("done-tasks");
        doneTasks.innerText = parseInt(doneTasks.innerText) + 1;
        
        if (parseInt(assignedTasks.innerText) === 0){
            alert("Congrats!! You have completed all the task.");
        }
       
      //  Activity log
        
        const taskCard = event.target.closest(".card-body");
        const taskName = taskCard.querySelector(".font-semibold").innerText;
        const now = new Date();
        const timeOnly = now.toLocaleTimeString();
        const activityLog = document.querySelector(".activity-log"); 
        const p = document.createElement("p");
        p.innerText = `
        You have completed the task ${taskName} at ${timeOnly}
        `;
        activityLog.appendChild(p);

  })
  }
