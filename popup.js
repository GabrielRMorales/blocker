$(document).ready(function(){

var current;
chrome.storage.local.get(function(result){
    $("#list").text(result["words"]);
    current=result["words"];
    console.log("Check 2: blocked list is "+ current);
    
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

//maybe keep this here
function showHide(no_spoiling) {
  for (var i=0;i<no_spoiling.length;i++){
    $(".yt-lockup-title").each(function(){
      var spoiler_lower=(no_spoiling[i]).toLowerCase();
      var a=$(this).text().indexOf(no_spoiling[i]);
      var a_lower=$(this).text().indexOf(spoiler_lower);
      var b=$(this).children().first().attr('title');
      var c;
      var c_lower;
      b!=undefined ? c=b.indexOf(no_spoiling[i]): c=-1;
      b!=undefined ? c_lower = b.indexOf(spoiler_lower): c_lower=-1;
   
  if (a != -1||c!=-1||a_lower != -1||c_lower!=-1){
    
    $(this).text("SPOILER ALERT");
    $(this).parent().prev().children().first().children().first().children().first().find("img").attr("src","https://pbs.twimg.com/profile_images/660830301187371009/LzVqWfh0.png");
  }
});
  }  
}
//

$("#get_words").click(function() {
//IN ORDER TO CHECK LOCAL STORAGE DO THIS IN THE EXTENSION DEV TOOLS chrome.storage.local.get(function(result){console.log(result)})



var y = $("#words").val().split(",");
console.log(y);
    /*x = current.split(",");
    console.log("x is "+x);
    y.push(x);*/
//showHide(y);
//TEST THIS $("#feed").load("ajax/test.html");
chrome.storage.local.set({"words": y}, function(){
  $("#list").text("words: "+y);
  
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