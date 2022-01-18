var hero = document.getElementById("hero");
var block = document.getElementById("block");



document.addEventListener("keyup",addanim);

function newFunction() {
    addanimeblock();
}

function addanim(e)
{
    if(e.keyCode <= 40 || e.keyCode >=37){
    hero.classList.add("anime");}
    setTimeout(function(){hero.classList.remove("anime");
},400);

    
}
var bodycolor = document.getElementById("game");
var checkdead = setInterval(function(){
    var checktophe = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var checkleftbl = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(checktophe>=265 && checkleftbl<=40 && checkleftbl>20){
        block.style.animation = "none";
        block.style.display = "none";
        alert("u need more practise , press any key to try again ");
      

    }
},10 );

document.addEventListener("keypress",resetGame);
function resetGame(){
    if(keyCode == 32){
        location.reload(); } 
}

       

