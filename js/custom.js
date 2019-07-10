
document.getElementById("contactSend").addEventListener("click", function(){ 
    
    var subject = document.getElementById("subject").value;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

   
    var mailto = ("mailto:goertz-niklas@posteo.net?subject=" + subject + "&amp;body=" + message + phone + name + ";");     
    
    window.location.href = mailto;
}); 

document.getElementById("astronaut").addEventListener("click", function(){ 
    //astronaut.style.backgroundImage = "url(../website/img/astronaut/idle0.png)";
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



