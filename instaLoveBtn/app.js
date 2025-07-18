var a = document.querySelector("#container");
var love = document.querySelector("i");
a.addEventListener("dblclick", function(){
    love.style.transform = 'translate(-50%, -50%) scale(1)'; 
    console.log("double click");
    love.style.color = "red";
    love.style.opacity = 0.6;
    setTimeout(function(){
        love.style.transform = 'translate(-50%, -50%) scale(0)'; 
        love.style.opacity = 0;
    }, 2000)
})