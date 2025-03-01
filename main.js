document.getElementById("theme-changer").addEventListener("click", function () {
  const colors = ["indigo", "orange", "tomato", "teal", "violet"];
  const randomNumber = Math.random() * 5;
  const index = Math.round(randomNumber);
  const color = colors[index];
  document.body.style.backgroundColor = color;
});

document.getElementById("discover-btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});

const buttons = document.querySelectorAll(".complete-btn");
for (i = 0; i < buttons.length; i++) {
  const btn = buttons[i];

 btn.addEventListener("click", function(){
    alert("Board Updated Successfully")
    btn.classList.add("disable")
 })

}
