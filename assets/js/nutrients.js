$(document).ready(function() {

  var openNutrient = false;
  var nutrients = $('.nutrient');

  // WHEN A NUTRIENT IS CLICKED
  nutrients.click(function() {

    var clicked = $(this);

    if(openNutrient === false) { // IF THERE ISN'T AN OPEN NUTRIENT
      clicked.find('.list-opener').html('-'); // substitute clicked nutrient's "+" with "-"
      clicked.find('.caption--element').css('display' , 'block'); // show the clicked nutrient
      clicked.attr('status' , 'open'); // change the clicked nutrient's status to open
      openNutrient = true; // now a nutrient is open
    }else { // IF THERE IS AN OPEN NUTRIENT

      if($(this).attr('status') === 'open') { // IF IT IS THE OPEN NUTRIENT THAT IS CLICKED
        clicked.find('.list-opener').html('+'); // substitute clicked nutrient's "-" with "+"
        clicked.find('.caption--element').css('display' , 'none'); // hide the clicked nutrient
        clicked.attr('status' , 'closed'); // change the clicked nutrient's status to closed
        openNutrient = false; // now a nutrient is closed
      }else { // IF IT IS SOME OTHER NUTRIENT THAT IS CLICKED
        nutrients.find('.list-opener').html('+'); // substitute open nutrient's "-" with "+"
        nutrients.find('.caption--element').css('display' , 'none'); // hide the open nutrient
        nutrients.attr('status' , 'closed'); // change the open nutrient's status to closed
        clicked.find('.list-opener').html('-'); // substitute clicked nutrient's "+" with "-"
        clicked.find('.caption--element').css('display' , 'block'); // show the clicked nutrient
        clicked.attr('status' , 'open'); // change the clicked nutrient's status to open
        openNutrient = true; // now a nutrient is open
      }

    }

  });

});
