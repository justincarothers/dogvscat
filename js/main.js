$(document).ready(function() {

  $("button#bark").click(function() {
    $(".dog").prepend("<li>Woof!</li>");
    $("#dogPic").animate({
      height: "+=50px" ,
    }, 500);


});
  $("button#meow").click(function() {
    $(".cat").prepend("<li>Meow!</li>");
    $("#catPic").animate({


      height: "+=50px" ,
    }, 500);


  });


});
