document.getElementById("theme-changer").addEventListener("click", function(){
    const colors = ["indigo", "orange", "tomato", "teal", "violet"]
    const randomNumber = Math.random()*5;
    const index = Math.round(randomNumber);
    const color= colors[index];
    document.body.style.backgroundColor = color;
   
})