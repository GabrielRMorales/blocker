$(document).ready(function(){

  var z;
  function getVal(cb){
   chrome.storage.local.get("words",cb);
  }

 getVal(function(res){
    z=res.words;
    //console.log("Check 1:"+Array.isArray(z) + " " + typeof(z));
   // showHide(z); blocked out to test hideInSides();
   hideInSides(z);
  var feed_check=$("#feed-main-what_to_watch").children().first();
  $(feed_check).arrive(".yt-lockup-dismissable",function(newElem){
    
    //console.log(newElem.childNodes);
   // showHide(z); blocked out to test hideInSides();
    //This is GOOD! It works as hoped. Implements the spoiler blocker, now it just needs to work at the beginning as well ie refactored
  });
  $(".watch-sidebar-section").arrive(".video-list-item",function(){
    hideInSides(z);
    //works
  });



  });
  
/*$(".yt-ui-ellipsis").each(function(){
console.log($(this).attr('title'));

});*/
function showHide(no_spoiling) {
 // console.log("Check 2: blocked list is "+z);

  for (var i=0;i<no_spoiling.length;i++){
    $(".yt-lockup-title").each(function(){

    var inOrNot;
    /*LATER ADD API TAG CHECKING-though it may act as a throttle, so work on this
    var vidInfo=$(this).children().first().attr("href");

    if (vidInfo){
      var v=vidInfo.split("").slice(9,20).join("");
      console.log("V is" + v);
        if (v) {
        var api="https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAneX8mT-5Z6LHiG7SXJwwhWBwmn_dybcA&fields=items(snippet(title,description,tags))&part=snippet&id=" +v;
        $.getJSON(api, function(data){   
         inOrNot = data.items[0].snippet.tags;
         console.log("inOrNot "+inOrNot);
        if (inOrNot) {
          inOrNot=inOrNot.indexOf(no_spoiling[i]);
        }
         
          });
        }

    }
  */
      var spoiler_lower=(no_spoiling[i]).toLowerCase();
      var a=$(this).text().indexOf(no_spoiling[i]);
      var a_lower=$(this).text().indexOf(spoiler_lower);
      var b=$(this).children().first().attr('title');
      var c;
      var c_lower;
      b!=undefined ? c=b.indexOf(no_spoiling[i]): c=-1;
      b!=undefined ? c_lower = b.indexOf(spoiler_lower): c_lower=-1;
   
  if (a != -1||c!=-1||a_lower != -1||c_lower!=-1||(inOrNot!=undefined&&inOrNot!=-1)){
    
    $(this).text("SPOILER ALERT");
    var image = $(this).parent().prev().children().first().children().first().children().first().find("img");
    image.attr("src","https://pbs.twimg.com/profile_images/660830301187371009/LzVqWfh0.png");
    
    image.bind("load",function(){
      var pic=image.attr("src");
      if (pic != "https://pbs.twimg.com/profile_images/660830301187371009/LzVqWfh0.png"){
      image.attr("src","https://pbs.twimg.com/profile_images/660830301187371009/LzVqWfh0.png");
    }

      /*  $(this).onload=function(){
          $(this).attr("src","https://pbs.twimg.com/profile_images/660830301187371009/LzVqWfh0.png");
        } */
        //This only partially works 
      

    });
  }

});
  }  
}

//Also youtube videos on the sidebar when you watch one and that appear on the same screen
function hideInSides(no_spoiling){
  //works, just needs refactoring
  for (var i=0;i<no_spoiling.length;i++){
    $(".video-list-item").each(function(){
      var sideArray=$(this).children().first().text().split(" ");
      var spoiler_lower=(no_spoiling[i]).toLowerCase();
      var a=sideArray.indexOf(no_spoiling[i]);
      /*var a_lower=$(this).text().indexOf(spoiler_lower);
      var b=$(this).children().first().attr('title');
      var c;
      var c_lower;
      b!=undefined ? c=b.indexOf(no_spoiling[i]): c=-1;
      b!=undefined ? c_lower = b.indexOf(spoiler_lower): c_lower=-1;
   */
  if (a != -1){
   
   $(this).children().first().find('span').first().text("SPOILER ALERT!");
   //works
   var image=$(this).find(".thumb-wrapper").children().children().first().find("img");

   image.attr("src","https://pbs.twimg.com/profile_images/660830301187371009/LzVqWfh0.png");
    
    image.bind("load",function(){
      var pic=image.attr("src");
      if (pic != "https://pbs.twimg.com/profile_images/660830301187371009/LzVqWfh0.png"){
      image.attr("src","https://pbs.twimg.com/profile_images/660830301187371009/LzVqWfh0.png");
      }
      });
    
  }

});
  }  

}
  //call showHide on these titles/thumbnails and block
  //collect user input on things they dont want to see
  //Later: Be able to toggle with showHide whether videos are blocked or not

});
