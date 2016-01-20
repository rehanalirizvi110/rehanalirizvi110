$(document).ready(function() {

      // fix menu when passed
      $('.masthead').visibility({
          once: false,
          onBottomPassed: function() {
            $('.fixed.menu').transition('fade in');
          },
          onBottomPassedReverse: function() {
            $('.fixed.menu').transition('fade out');
          }
        })
      ;

      // create sidebar and attach to menu open
      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item');

    
    //video effect

        $('.ui.embed').embed();


/*      chat image blur         */

$('#chatimg').mouseenter(function(){
$(this).css({

  'transform':'scale(1.3,1.3)',
  'trasition':'0.5 ease'
});


});
$('#chatimg').mouseout(function(){
$(this).css({

  'transform':'scale(1,1)',
  'trasition':'0.5 ease'
});
});

/*      pratise image blur         */

$('#practiseimg').mouseenter(function(){
$(this).css({

  'transform':'scale(1.3 ,1.3)',
  'trasition':'0.5 ease'
});


});
$('#practiseimg').mouseout(function(){
$(this).css({

  'transform':'scale(1,1)',
  'trasition':'0.5 ease'
});
});

/*lean image  blur*/
$('#conn1').mouseenter(function(){
$(this).css({

  'transform':'scale(1.5,1.5)',
  'trasition':'0.5 ease'
});


});
$('#conn1').mouseout(function(){
$(this).css({

  'transform':'scale(1,1)',
  'trasition':'0.5 ease'
});
});

//open modal login
  $('#green1').on('click',function(){
    $('.ui.modal')
    .modal('show');
});

//team member effect
$('.special.cards .image').dimmer({
  on: 'hover'
});

//footer Brand logo
$('.facebook').mouseenter(function(){
  $('.facebook').css({'color':'#3b5998'});
});
$('.facebook').mouseleave(function(){
  $('.facebook').css({'color':'white'});
});





$('.google').mouseenter(function(){
  $('.google').css({'color':'#dd4b39'});
});
$('.google').mouseleave(function(){
  $('.google').css({'color':'white'});
});




$('.linkedin').mouseenter(function(){
  $('.linkedin').css({'color':'#007bb5'});
});
$('.linkedin').mouseleave(function(){
  $('.linkedin').css({'color':'white'});
});


$('.twitter').mouseenter(function(){
  $('.twitter').css({'color':'#00aced'});
});
$('.twitter').mouseleave(function(){
  $('.twitter').css({'color':'white'});
});

$('.youtube').mouseenter(function(){
  $('.youtube').css({'color':'#bb0000'});
});
$('.youtube').mouseleave(function(){
  $('.youtube').css({'color':'white'});
});

//end  document.ready
});

