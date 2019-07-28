//ASTRONAUT CLICK
document.getElementById("astronaut").addEventListener("click", function(){ 
    astronaut.style.backgroundImage = "url(../website/img/astronaut/naked1.gif)";
});

//CATS !!!!
const args = [
    `%c  %c  %c  %c  %c  %c  %c  %c  %c    `,

    'font-size:400px; background-repeat:no-repeat; background-image:url(https://i.giphy.com/media/3ov9jHL2zqPnFPQCA0/giphy.webp);',
    'font-size:200px; background-repeat:no-repeat; background-image:url(https://i.giphy.com/media/3oEduQAsYcJKQH2XsI/200w.webp);',	
    'font-size:200px; background-repeat:no-repeat; background-image:url(https://i.giphy.com/media/3o85xoi6nNqJQJ95Qc/200w.webp);',			
    'font-size:200px; background-repeat:no-repeat; background-image:url(https://i.giphy.com/media/BzEPO5HyaQb6kT8Y18/giphy.webp);',
    'font-size:250px; background-repeat:no-repeat; background-image:url(https://i.giphy.com/media/VOPK1BqsMEJRS/200w.webp);',
    'font-size:200px; background-repeat:no-repeat; background-image:url(https://i.giphy.com/media/ktW8FqKodoPUk/200w.webp);',
    'font-size:200px; background-repeat:no-repeat; background-image:url(https://i.giphy.com/media/Ol2yHMEFJdYEo/200w.webp);',
    'font-size:200px; background-repeat:no-repeat; background-image:url(https://i.giphy.com/media/cXaeWuJ1oKO4g/giphy.webp);',	
    'font-size:200px; background-repeat:no-repeat; background-image:url(https://i.giphy.com/media/nNxT5qXR02FOM/giphy.webp);'			
];
window.console.log.apply(console, args);

//MORE BTN
function more() {
    var dots = ["dots1", "dots2", "dots3"];
    var more = ["dots1", "dots2", "dots3"];
    var btns = ["dots1", "dots2", "dots3"];

    var dots1 = document.getElementById("dots1");
    var moreText1 = document.getElementById("more1");
    var btnText1 = document.getElementById("myBtn1");

    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("myBtn2");    

    var dots3 = document.getElementById("dots3");
    var moreText3 = document.getElementById("more3");
    var btnText3 = document.getElementById("myBtn3"); 
    
    if(dots1.style.display === "none"){
        dots1.style.display = "inline";     
        btnText1.innerHTML = "Zeig mir mehr!"; 
        moreText1.style.display = "none";      

        dots2.style.display = "inline";     
        btnText2.innerHTML = "Zeig mir mehr!"; 
        moreText2.style.display = "none";    
        
        dots3.style.display = "inline";     
        btnText3.innerHTML = "Zeig mir mehr!"; 
        moreText3.style.display = "none";       
    } 
    else{
        dots1.style.display = "none";
        btnText1.innerHTML = "Zeig mir weniger..."; 
        moreText1.style.display = "inline";    

        dots2.style.display = "none";
        btnText2.innerHTML = "Zeig mir weniger..."; 
        moreText2.style.display = "inline";        
        
        dots3.style.display = "none";
        btnText3.innerHTML = "Zeig mir weniger..."; 
        moreText3.style.display = "inline";     
    }
}

//TO TOP BTN
$(document).ready(function(){
	var back_to_top_button = ['<a href="#top" class="back-to-top"></a>'].join("");
	$("body").append(back_to_top_button)
	$(".back-to-top").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.back-to-top').fadeIn();
			} else {
				$('.back-to-top').fadeOut();
			}
		});
		$('.back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});

//SKILLS
/*
skills = document.getElementsByClassName("skillImg");

for(i=0;i<skills.length;i++){
    skills[i].style.background = "red"
}
*/