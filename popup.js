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
var addThese = $("#words").val().split(",");
if (addThese!=undefined&&current!=undefined){
  //addThese and current are arrays
  addThese=addThese.concat(current);


}
chrome.storage.local.set({"words": addThese}, function(){
  $("#list").text("words: "+addThese);  
  });

    /*x = current.split(",");
    console.log("x is "+x);
    y.push(x);*/
//showHide(y);
//TEST THIS $("#feed").load("ajax/test.html");


});

$("#remove_words").click(function(){
    var newarr=[], removeThese = $("#words").val().split(",");

    if (removeThese!=undefined&&current!=undefined){
      for (var i=0;i<current.length;i++){
          var u=removeThese.indexOf(current[i]);
            if (u==-1){
               newarr.push(current[i]);
            }  
        }
             //This function needs to get fixed        
    }
    //newarr=String(newarr);
    chrome.storage.local.set({"words": newarr}, function(){
        $("#list").text("words: "+newarr);  
        });

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