$(document).ready(function(){

chrome.storage.local.get(function(result){
    $("#list").text(result["words"]);
});


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

var y = $("#words").val().split(",");

console.log("working so far 2. y is "+y);
chrome.storage.local.set({"words": y}, function(){
  $("#list").html("words "+y);
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