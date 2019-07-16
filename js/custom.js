document.getElementById("contactSend").addEventListener("click", function(){   
    var subject = document.getElementById("subject").value;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var mailto = ("mailto:goertz-niklas@posteo.net?subject=" + subject + "&body=" + message + "%0D%0A%0D%0A Tel: " + phone + "%0D%0A Name: " + name + ";");     
    
    /*
    if(subject.length <= 20 && subject != ""){
        console.log("subject ok");
    }else{
        console.log("subject too long or empty!");
    }

    if(name.length <= 20 && name != ""){
        console.log("name ok");
    }else{
        console.log("name too long or empty!");
    }

    if(message.length <= 200 && message != ""){
        console.log("name ok");
    }else{
        console.log("message too long, empty or not a word!");
    }
    */
   
    window.location.href = mailto;
    
}); 


document.getElementById("astronaut").addEventListener("click", function(){ 
    astronaut.style.backgroundImage = "url(../website/img/astronaut/idle0.png)";
});

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


function more() {
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


$(document).ready(function(){
	var back_to_top_button = ['<a href="#top" class="back-to-top">Nach oben</a>'].join("");
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