// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES




// DOCUMENT READY FUNCTION BELOW
$(document).ready(function(){
   var userChoice;
       userChoice="";
       
   var computerChoice;
       computerChoice="";
       
   var winner;
       winner="";
      
      
    
       

   
       
   $("button").click(function(){
       userChoice= $("#input").val();
        var randomNumber=Math.random();
   
   if(randomNumber < .80 && randomNumber > .60){
        $("#computerChoice").text("rock");
    }
    else if(randomNumber < .60 && randomNumber > .40){
        $("#computerChoice").text("paper");
    }
    else {
        $("#computerChoice").text("scissor");
    }
 
 $("#userChoice").text(userChoice);
       
       if (userChoice === "rock" && computerChoice === "rock"){
    $("#winner").text("TIE!");
}
else if (userChoice === "paper" && computerChoice === "rock"){
   $("#winner").text("YOU WIN!");
}
else if(userChoice === "scissor" && computerChoice === "rock"){
   $("#winner").text("COMPUTER WINS!");
}
 else if (userChoice === "paper" && computerChoice === "paper"){
    $("#winner").text("TIE!");
}
else if (userChoice === "rock" && computerChoice === "paper"){
   $("#winner").text("COMPUTER WINS!");
}
else if(userChoice === "scissor" && computerChoice === "paper"){
   $("#winner").text("YOu WINS!");
}
else if (userChoice === "paper" && computerChoice === "scissor"){
    $("#winner").text("COMPUTER WINS!");
}
else if (userChoice === "rock" && computerChoice === "scissor"){
   $("#winner").text("YOU WIN!");
}
else if(userChoice === "scissor" && computerChoice === "scissor"){
   $("#winner").text("TIE!");
}
else {
    $("#winner").text("INVALID RESPONSE!");
}
       

       
       
       
       
       
       
       
       
});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
});
