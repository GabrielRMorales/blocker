$(document).ready(function(){

var current;
chrome.storage.local.get(function(result){
    if (result["words"]!=undefined){
    $("#list").text(result["words"]);
    current=result["words"];
    console.log("Check 2: blocked list is "+ current);
    }
    else {
    $("#list").text("No spoilers blocked.");  
    } 
    
    
});

//THIS GETS API-WORKS HERE IN THIS SPOT
/*
var api="https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAneX8mT-5Z6LHiG7SXJwwhWBwmn_dybcA&fields=items(snippet(title,description,tags))&part=snippet&id=BY9XfmbXOZQ";

  $.getJSON(api, function(data){   
    console.log("DATA "+ data.items[0].snippet.tags);
    console.log("KEYS "+ Object.keys(data.items[0].snippet.tags));
});
*/
//
$("#clear").click(function(){
    chrome.storage.local.clear(function() {
    var error = chrome.runtime.lastError;
    if (error) {
        console.error(error);
    }
    });
});

$("#get_words").click(function() {
//IN ORDER TO CHECK LOCAL STORAGE DO THIS IN THE EXTENSION DEV TOOLS chrome.storage.local.get(function(result){console.log(result)})

//Dragon,Goku,Beerus,God,Star,Thor,Blade,Justice,Final,Game

var y = $("#words").val().split(",");
if (y!=undefined&&current!=undefined){
  y+=","+current;
  console.log(y);

}
chrome.storage.local.set({"words": y}, function(){
  $("#list").text("words: "+y);  
  });

    /*x = current.split(",");
    console.log("x is "+x);
    y.push(x);*/
//showHide(y);
//TEST THIS $("#feed").load("ajax/test.html");


});
 /*chrome.storage.local.get(function(items) {
    if (Object.keys(items).length > 0 ) {
        // The data array already exists, add to it the new server and nickname
        console.log('IT is here');
    } else {
        // The data array doesn't exist yet, create it
        console.log("DOesnt' exist");
    }

  });*/
});