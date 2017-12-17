$(document).ready(function() {

  $('.beginner, .extended, .business').mouseover(function() { // When a user hovers over a package
    $(this).find('li').not('.mobile-row, .heading.heading--small, .heading.heading--big').css({'color' : 'white'}); // Highlight its borders
    $(this).find('button').css({'display' : 'block'}); // Display the button at the bottom of a package
  });

  $('.beginner, .extended, .business').mouseleave(function() { // When a user leaves a package
    $(this).find('li').not('.mobile-row, .heading.heading--small, .heading.heading--big').css({'color' : '#4e9dba'}); // Abolish white highlight
    $(this).find('button').css({'display' : 'none'}); // Hide the button at the bottom of a package
  });

});

$(window).scroll(function() {

  if($('#beginner').position().top > 830) { // If sticky menu's distance from the top is greater than 830
    $('#beginner, #beginner-price, #extended, #extended-price, #business, #business-price').css('visibility' , 'hidden'); // hide the sticky menu
  }else { // If sticky menu's distance from the top is less than 830
    $('#beginner, #beginner-price, #extended, #extended-price, #business, #business-price').css('visibility' , 'visible'); // show the sticky menu
  }

});
