let rocket = document.getElementById("contactRocket");
let contactBorder = document.getElementById("contactBorder");
contactBorder.addEventListener("mouseover", function(){ 
    rocket.classList.add("rocketWiggle");
});
contactBorder.addEventListener("mouseleave", function(){ 
    rocket.classList.remove("rocketWiggle");
});

let i = 1;
function automate(){
    var filterOn = document.getElementById("skillID-" + i);

    if (filterOn != null){
        filterOn.classList.add("skillImgAutomation"); 
    }
    setTimeout(automate, 400);
    if(i>39){
        i = 1;
    }else{
        i++;
    }
}
automate();

document.querySelectorAll('.skillImg').forEach((img) => {
    img.addEventListener('mouseover', (e) => {
      const skillName = e.target.closest('.skill').querySelector('.skillTag').textContent.trim().toLowerCase();
      document.querySelectorAll('.timeline span').forEach((span) => {
        if (span.textContent.toLowerCase() === skillName) {
          span.classList.add('highlighted');
        }
      });
    });
  
    img.addEventListener('mouseout', () => {
      document.querySelectorAll('.timeline span').forEach((span) => {
        span.classList.remove('highlighted');
      });
    });
  });
  