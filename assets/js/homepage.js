$(document).ready(function() {

  var feats = $('.feat'); // all feat elements
  var descriptions = $('.desc'); // all description elements

  $('.feat').mouseover(function() { // When a user hovers over or clicks a feat
    $(this).find(':nth-child(5)').css({'animation' : 'top .1s linear forwards'}); // draw top border
    $(this).find(':nth-child(6)').css({'animation' : 'right .1s linear forwards', 'animation-delay' : '.1s'}); // draw right border
    $(this).find(':nth-child(7)').css({'animation' : 'bottom .1s linear forwards', 'animation-delay' : '.2s'}); // draw left border
    $(this).find(':nth-child(8)').css({'animation' : 'left .1s linear forwards', 'animation-delay' : '.3s'}); // draw bottom border
  });

  $('.feat').mouseleave(function() { // When a user hovers over or clicks another feat
    $(this).find(':nth-child(5)').css({'animation' : 'none'}); // remove border
    $(this).find(':nth-child(6)').css({'animation' : 'none'}); // remove border
    $(this).find(':nth-child(7)').css({'animation' : 'none'}); // remove border
    $(this).find(':nth-child(8)').css({'animation' : 'none'}); // remove border
  });

  $('.caption--feature--showMore').click(function() { // When a user clicks on 'Show more' button
    descriptions.addClass('hide'); // hide all currently displayed descriptions
    feats.removeClass('hide'); // show all currently hidden feats
    $(this).parent().addClass('hide'); // hide feat to which 'Show more' button belongs
    $(this).parent().siblings().removeClass('hide'); // show corresponding description
  });

  $('.desc').mouseleave(function() { // when mouse pointer leaves the description field
    $(this).addClass('hide'); // hide currently displayed description
    $(this).siblings().removeClass('hide'); // show corresponding feat
  });

 // Header language switch
  $('#languageSwitch').click(function() {
      $('.otherLanguage').toggleClass('block');
  });

});
