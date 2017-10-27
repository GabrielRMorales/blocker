$(document).ready(function(){

var z;
chrome.storage.local.get("words", function(res){ 
        //alert("Got "+res.words);
          z=res.words;
          console.log("Check 1:"+Array.isArray(z) + " " + typeof(z));
          showHide(z);
        });
//
$(".yt-uix-button").click(function () {
    console.log("LOADED MORE");
}); 

//showHide(["Dragon","Goku","Beerus","God","super","dragon"]);
/*$(".yt-ui-ellipsis").each(function(){
console.log($(this).attr('title'));

});*/
function showHide(no_spoiling) {
  console.log("Check 2: z is "+z);
  for (var i=0;i<no_spoiling.length;i++){
  $(".yt-lockup-title").each(function(){
    
    if ($(this).text().indexOf(no_spoiling[i]) != -1 ){
          console.log($(this).children().first().attr('title'));
          $(this).text("SPOILER ALERT");
          $(this).parent().prev().children().first().children().first().children().first().find("img").attr("src","https://pbs.twimg.com/profile_images/660830301187371009/LzVqWfh0.png");
             }
      });
}  
}

//Later: look up the tags of the videos and if they contain the keywords, block them.
//Also youtube videos on the sidebar when you watch one and that appear on the same screen
//the below works
/*
$.getJSON('https://www.googleapis.com/youtube/v3/videos?id=MoLkabPK3YU&key=AIzaSyAneX8mT-5Z6LHiG7SXJwwhWBwmn_dybcA&part=snippet&callback=?',function(data){
    if (typeof(data.items[0]) != "undefined") {
        console.log('video exists ' + data.items[0].snippet.title);
        $("#test").html(data.items[0].snippet.tags);

       } else {
        console.log('video not exists');
     }   
    });
  //the above works
//collect user input on things they dont want to see
//$(function() {
   
    //$("#get_words").click(function() {
      //$("#body").css("background","blue");
       // var y = $("#words").val().split(",");
        
      /*for (var i=0;i<y.length;i++){
          
          //showHide(y[i]);
          //console.log(y[i]);
        }

       /* x = chrome.storage.local.get("words", function(){ 
          alert("Got "+x);
        }) || chrome.storage.local.set({"words": y}, function(){
          x = y;
          alert("Saving "+ x);
        });*/
        
        //call showHide on these titles/thumbnails and block
            

   // });

//});

//Later: Be able to toggle with showHide whether videos are blocked or not



});