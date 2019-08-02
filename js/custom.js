//ASTRONAUT CLICK
document.getElementById("astronaut").addEventListener("click", function(){ 
    astronaut.style.backgroundImage = "url(https://raw.githubusercontent.com/dooflesdoodles/website/master/img/astronaut/idle0_naked.gif)";
});

//MORE BTN
function more(){
    var dots = ["dots1", "dots2", "dots3"];
    var btns = ["myBtn1", "myBtn2", "myBtn3"];
    var more = ["more1", "more2", "more3"];

    for(i=0;i<=2;i++){
        dots[i] = document.getElementById(dots[i]);
        btns[i] = document.getElementById(btns[i]);
        more[i] = document.getElementById(more[i]);
        
        if(dots[i].style.display === "none"){    
            dots[i].style.display = "inline";
            btns[i].innerHTML = "Zeig mir mehr!"; 
            more[i].style.display = "none";  
        } 
        else{
            dots[i].style.display = "none";
            btns[i].innerHTML = "weniger anzeigen"; 
            more[i].style.display = "inline";  
        } 
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