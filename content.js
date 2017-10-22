$(document).ready(){function(){
//collect user input on things they dont want to see
//Later: look up the tags of the videos and if they contain the keywords, block them
//call showHide on these titles/thumbnails and block
//Later: Be able to toggle with showHide whether videos are blocked or not
function get_words(){
var to_avoid=document.getElementById("words").value;

showHide(to_avoid);

}


function showHide(no_spoiling) {

  $(".yt-lockup-title").each(function(){
    hide(no_spoiling);
  });
  
  function hide(no_spoiling) {
      if ($(this).text().indexOf(no_spoiling) != -1 ){
          $(this).text("SPOILER ALERT");
          $(this).parent().prev().children().first().children().first().children().first().find("img").attr("src","https://pbs.twimg.com/profile_images/660830301187371009/LzVqWfh0.png");
                                                      }
                              }

}

    /*
    for (var i = 0; i < x.length; i++) {
        if (x[i].innerHTML.indexOf(no_spoiling) != -1) {

          x[i].innerHTML="SPOILER ALERT";

          var y=findAncestor(x[i].parentElement, "yt-lockup-thumbnail");
          
          y.firstChild.firstChild.firstChild.outerHTML="<img width="+"196"+" height="+"110"+" src="+"https://pbs.twimg.com/profile_images/660830301187371009/LzVqWfh0.png"+">";
          console.log(y.firstChild.firstChild.firstChild.firstChild.width);
          console.log(y.firstChild.firstChild.firstChild.getElementsByTagName("img").width);
          //src="images/blocker.png";
          //y.style.display="none";
        }
    }
*/

}