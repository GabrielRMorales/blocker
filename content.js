$(document).ready(function(){
//collect user input on things they dont want to see
//Later: look up the tags of the videos and if they contain the keywords, block them
//call showHide on these titles/thumbnails and block
//Later: Be able to toggle with showHide whether videos are blocked or not
showHide("Godzilla");
showHide("Trump");

function showHide(no_spoiling) {

    function findAncestor (el, cls) {
    while ((el = el.previousSibling) && !el.classList.contains(cls));
    return el;
    }
    
    console.log(typeof($("#grid-796945")));

    var x = document.getElementsByClassName(".yt-lockup-title"), i;

    for (i = 0; i < x.length; i++) {
        if (x[i].innerHTML.indexOf(no_spoiling) != -1) {

          x[i].innerHTML="SPOILER ALERT";

          var y=findAncestor(x[i].parentElement, "yt-lockup-thumbnail");
          
          y.firstChild.firstChild.firstChild.outerHTML="<img width="+"196"+" height="+"110"+" src="+"https://pbs.twimg.com/profile_images/660830301187371009/LzVqWfh0.png"+">";
          /*console.log(y.firstChild.firstChild.firstChild.firstChild.width);
          console.log(y.firstChild.firstChild.firstChild.getElementsByTagName("img").width);*/
          //src="images/blocker.png";
          //y.style.display="none";
        }
    }

/*
    var el =  document.getElementById("feed-main-what_to_watch");
    if( el && el.style.display == 'none')
        el.style.display = 'block';
    else if( el )
        el.style.display = 'none';
*/

}


});

/*if ( ){
  document.getElementById(id).style.visibility = "hidden";
  document.getElementById(id).style.visibility = "visible";
}

document.addEventListener('DOMContentLoaded', function() {
  //var checkPageButton = document.getElementById('checkPage');
  //checkPageButton.addEventListener('click', function() {
//window.getElementById("header").style.background-color="green";
  console.log("hey");
    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = '';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  //}, false);
}, false);
*/