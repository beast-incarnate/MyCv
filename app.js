

window.onload = function() {
    console.log("window");
    addEvent("git" , "gitimg");
    addEvent("fb" , "fbimg");
    addAlert("watsapp" , "watsappimg");
    addEvent("linkedin" , "linkedinimg");
    addAlert("gmail" , "gmailimg");
    addAlert("twelve" , "twelveimg");
    
};


function addEvent(s , t) {
    
    console.log("came in fun");
    
    var content = document.getElementById(s);

content.addEventListener('click', function () {
                         content.classList.toggle('flip');
                         });
    var img = document.getElementById(t);
    
    img.addEventListener('click',function(e) {
        console.log("came her");
        e.stopPropagation();
    });
    
}

function addAlert(s , t){
    
    var content = document.getElementById(s);
    
    content.addEventListener('click', function () {
                         content.classList.toggle('flip');
                         });
    
    var img = document.getElementById(t);
    
    switch(t){
    
        case "watsappimg" : img.addEventListener('click' , function(e){
                         
            alert("Contact: 9711890684");
            e.stopPropagation();                 
         });
            break;
            
        case "gmailimg" : img.addEventListener('click' , function(e){
            
            alert("Email : singh.kunal112@gmail.com");
            e.stopPropagation();
        });
            break;
            
            
        case "twelveimg" : img.addEventListener('click' , function(e){
            
            alert("Percentage : 93.4" );
            e.stopPropagation();
            
        }); 
            
        break;
    }
    
}