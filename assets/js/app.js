$(function(){
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });

  $(window).resize(function(e) {
    if($(window).width()<=768){
      $("#wrapper").removeClass("toggled");
    }else{
      $("#wrapper").addClass("toggled");
    }
  });
});

//  create a keypress method for the enter key
$("#inputZip.form-control").keypress(function(event) {
  let key = event.keyCode;
    if(key === 13) {
      console.log("ENTER");
    }
  })
  // create an ajax setup for an api
  let key = "69e9f092ab51bf6c870b9892ace15ab6";
  let url = 