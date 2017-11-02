$(document).ready(function(){

  var z;
  function getVal(cb){
   chrome.storage.local.get("words",cb);
  }

 getVal(function(res){
    z=res.words;
    console.log("Check 1:"+Array.isArray(z) + " " + typeof(z));
    showHide(z);
  });
  
  //
     
/*$(".yt-uix-button").click(function () {
  console.log("LOADED MORE");
}); */
//showHide([Dragon,Goku,Beerus,God,super,dragon]);
/*$(".yt-ui-ellipsis").each(function(){
console.log($(this).attr('title'));

});*/
function showHide(no_spoiling) {
  console.log("Check 2: blocked list is "+z);

  for (var i=0;i<no_spoiling.length;i++){
    $(".yt-lockup-title").each(function(){

/*LATER ADD API TAG CHECKING
    var d;  
    var vidInfo=$(this).children().first().attr("href");

    if (vidInfo){
      var v=vidInfo.split("").slice(9,20).join("");
      console.log("V is" + v);
        if (v) {
        var api="https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAneX8mT-5Z6LHiG7SXJwwhWBwmn_dybcA&fields=items(snippet(title,description,tags))&part=snippet&id=" +v;
          $.getJSON(api, function(data){   
         d = data.items[0].snippet.tags;
         if (d) {
          d=d.indexOf(no_spoiling[i]);
         }
         console.log(d);
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
   
  if (a != -1||c!=-1||a_lower != -1||c_lower!=-1){
    
    $(this).text("SPOILER ALERT");
    var image = $(this).parent().prev().children().first().children().first().children().first().find("img");
    image.attr("src","https://pbs.twimg.com/profile_images/660830301187371009/LzVqWfh0.png");
    
    image.bind("load",function(){
      var pic=image.attr("src");
      if (pic != "https://pbs.twimg.com/profile_images/660830301187371009/LzVqWfh0.png"){
      image.attr("src","https://pbs.twimg.com/profile_images/660830301187371009/LzVqWfh0.png");
    }
    
    });
        //this works but it slows down more page loading impossibly
      /*  $(this).onload=function(){
          $(this).attr("src","https://pbs.twimg.com/profile_images/660830301187371009/LzVqWfh0.png");
        } */
        //This only partially works 
      

      //});
  }

});
  }  
}

  //Also youtube videos on the sidebar when you watch one and that appear on the same screen
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
