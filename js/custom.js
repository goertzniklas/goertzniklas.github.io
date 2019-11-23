//ASTRONAUT CLICK EVENT
document.getElementById("astronaut").addEventListener("click", function(){ 
    astronaut.style.backgroundImage = "url(./img/astronaut/idle1.gif)";
});

//CONTACT ROCKET MOUSE EVENT
let rocket = document.getElementById("contactRocket");
let contactBorder = document.getElementById("contactBorder");
contactBorder.addEventListener("mouseover", function(){ 
    rocket.classList.add("rocketWiggle");
});
contactBorder.addEventListener("mouseleave", function(){ 
    rocket.classList.remove("rocketWiggle");
});

//CONSOLE
const args = [
    `%c  `,
    'font-size:100px; background-size:100px; background-repeat:no-repeat; background-image:url(https://www.pngarts.com/files/1/Space-Invaders-Alien-Transparent-Background-PNG.png);',				
];
window.console.log.apply(console, args);

//SKILL-IMG BLINK AUTOMATION
let i = 1;
function automate(){
    var filterOn = document.getElementById("skillID-" + i);
    filterOn.classList.add("skillImgAutomation"); 
    setTimeout(automate, 440);
    if(i>=16){
        i = 1;
    }else{
        i++;
    }
}
automate();