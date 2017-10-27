$("#get_words").click(function() {
  var y = $("#words").val().split(",");
  console.log("working so far 2. y is "+y);
  chrome.storage.local.set({"words": y}, function(){
          
          alert("Saving "+ y);
  });

});