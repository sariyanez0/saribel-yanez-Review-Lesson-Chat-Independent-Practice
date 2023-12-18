var yourName = "Saribel";
var friendsName = "Sasha";
// var message = 1;
// message+=1 ;

$(".my-button").click(function() {
    var myMessage=$(".your-input").val();
    console.log(myMessage); 
    // $("h4").text("Number of messages received: " + message);
    $(".sent").show("<p>" + myMessage + "</p>");
    $(".sent").append("<p>" + myMessage + "</p>");
});

$(".friend-button").click(function() {
    $(".received").css("color", "red");
    var yourMessage=$(".friend-input").val();
    console.log(yourMessage); 
    // $("h4").text("Number of messages received: " + message);
    $(".received").append("<p>" + yourMessage + "</p>");
    
});

 

let countDisplay = document.querySelector('.counter-display');
let countPlus = document.querySelector('.counter-plus');

let count = 1;

updateDisplay();

countPlus.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

function updateDisplay(){
    countDisplay.innerHTML = "Number of messages received: " +count;
}


//DON'T CHANGE THIS CODE

var realYourName, realFriendName;

try {
    realYourName = eval('yourName');
    realFriendName = eval('friendsName');
} catch (_e) {}

updateNames();

function updateNames(){
    $(".your-name").text(realYourName);
    $(".friends-name").text(realFriendName);
}