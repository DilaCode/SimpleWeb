document.getElementById("button").addEventListener("click",function(){
    var text =document.getElementById("text");
    var colors=["#ff6347", "#4682b4", "#32cd32", "#daa520", "#ff69b4"];
    var randomColor = colors[Math.floor(Math.random()*colors.length)];
    text.style.color=randomColor;
});