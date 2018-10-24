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
       userChoice= $("#input").val().toLowerCase();
        var randomNumber=Math.random();
   
   if(randomNumber < .80 && randomNumber > .60){
       computerChoice="rock";
    }
    else if(randomNumber < .60 && randomNumber > .40){
        computerChoice="paper";
    }
    else {
        computerChoice="scissor";
        
    }
 
$("#userChoice").text(userChoice);
$("#computerChoice").text(computerChoice);
     
       if ( (userChoice !== "rock") && (userChoice !== "paper") && (userChoice !== "scissor") && (userChoice !== "lizard") && (userChoice !== "spock")){
   $("#resultWinner").text("Not Valid Input");

           return;
       }
       
       
   if (userChoice === "rock"){ 
       if (computerChoice === "rock"){
           $("#resultWinner").text("TIE!");
       }
       else if(computerChoice === "paper"){
           $("#resultWinner").text("Lose!");
       }
       else if(computerChoice === "scissor"){
           $("#resultWinner").text("win!");
       }
       else if(computerChoice === "lizard"){
           $("#resultWinner").text("win!");
       }
       else if(computerChoice === "spock"){
           $("#resultWinner").text("Lose!");
       }
   }
    
   else if (userChoice === "paper"){ 
       if (computerChoice === "rock"){
           $("#resultWinner").text("Win!");
       }
       else if(computerChoice === "paper"){
           $("#resultWinner").text("Tie!");
       }
       else if(computerChoice === "scissor"){
           $("#resultWinner").text("Lose!");
       }
        else if(computerChoice === "lizard"){
           $("#resultWinner").text("Lose!");
       }
       else if(computerChoice === "spock"){
           $("#resultWinner").text("Win!");
       }
       
   }
   else if (userChoice === "scissor"){ 
       if (computerChoice === "rock"){
           $("#resultWinner").text("Lose!");
       }
       else if(computerChoice === "paper"){
           $("#resultWinner").text("Win!");
       }
       else if(computerChoice === "scissor"){
           $("#resultWinner").text("Tie!");
       }
        else if(computerChoice === "lizard"){
           $("#resultWinner").text("win!");
       }
       else if(computerChoice === "spock"){
           $("#resultWinner").text("Lose!");
       }
   }
   else if (userChoice === "lizard"){ 
       if (computerChoice === "rock"){
           $("#resultWinner").text("Lose!");
       }
       else if(computerChoice === "paper"){
           $("#resultWinner").text("Win!");
       }
       else if(computerChoice === "scissor"){
           $("#resultWinner").text("Lose!");
       }
        else if(computerChoice === "lizard"){
           $("#resultWinner").text("Tie!");
       }
       else if(computerChoice === "spock"){
           $("#resultWinner").text("Win!");
       }
   }
   else if (userChoice === "spock"){ 
       if (computerChoice === "rock"){
           $("#resultWinner").text("Win!");
       }
       else if(computerChoice === "paper"){
           $("#resultWinner").text("Lose!");
       }
       else if(computerChoice === "scissor"){
           $("#resultWinner").text("Win!");
       }
        else if(computerChoice === "lizard"){
           $("#resultWinner").text("Lose!");
       }
       else if(computerChoice === "spock"){
           $("#resultWinner").text("Tie!");
       }
   }
});
});
