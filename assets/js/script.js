
$(document).ready(function() {

  // QUESTION 6

  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:
$("#sidebar-button") .click(function() {
    if ($(".sidebar-container") .hasClass("sidebar-active")) {
       $('body') .removeClass('no-scroll');
       $("#sidebar-button") .removeClass("button-active");
       $(".sidebar-container") .removeClass("sidebar-active");
       $(".page-wrapper") .removeClass("wrapper-active");
     }    
    else {
      $("#sidebar-button") .addClass("button-active");
      $(".sidebar-container") .addClass("sidebar-active");
      $(".page-wrapper") .addClass("wrapper-active");
      setTimeout(function() {
      $('body') .addClass('no-scroll');
      }, 300);
    }
});
  // QUESTION 7

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
$(".page-wrapper") .click(function() {
  if ($(".sidebar-container") .hasClass("sidebar-active")) {
       $('body') .removeClass('no-scroll');
       $("#sidebar-button") .removeClass("button-active");
       $(".sidebar-container") .removeClass("sidebar-active");
       $(".page-wrapper") .removeClass("wrapper-active");
  }

});
  // QUESTION 8

  //Implement the "slide to left" when the user clicks on #carousel-next here

$("#carousel-next") .click(function() {
  var curr_margin = parseInt($('#carousel').css('margin-left').replace("px",""));
  if (curr_margin == -3840) {
    return false;
  } 
  else {
    curr_margin -= 960;
    curr_margin = curr_margin.toString()+"px"; 
    $("#carousel").css('margin-left', curr_margin);
  }
});
  //Implement the "slide to right" when the user clicks on #carousel-prev here
 $("#carousel-prev") .click(function() {
  var curr_margin = parseInt($('#carousel').css('margin-left').replace("px",""));
  if (curr_margin == 0) {
    return false;
  } 
  else {
    curr_margin += 960;
    curr_margin = curr_margin.toString()+"px"; 
    $("#carousel").css('margin-left', curr_margin);
  }
});



  //THIS IS NOT A REQUIRED QUESTION 
  // EXTRA FOR EXPERTS 

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});