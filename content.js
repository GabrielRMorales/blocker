$(document).ready(function(){

//collect user input on things they dont want to see
//Later: look up the tags of the videos and if they contain the keywords, block them
//call showHide on these titles/thumbnails and block
//Later: Be able to toggle with showHide whether videos are blocked or not
showHide("Star");

function showHide(no_spoiling) {

  $(".yt-lockup-title").each(function(){
    if ($(this).text().indexOf(no_spoiling) != -1 ){
          $(this).text("SPOILER ALERT");
          $(this).parent().prev().children().first().children().first().children().first().find("img").attr("src","https://pbs.twimg.com/profile_images/660830301187371009/LzVqWfh0.png");
             }
      });
}  

});