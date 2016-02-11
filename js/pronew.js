$(document).ready(function() {
	
	$(window).resize(function(){
   console.log('resize called');
   var width = $(window).width();
   if(width <= 992 && width >= 768){
       $('#initial_menu').removeClass('huge').addClass('large');
       /*$('#get_started').removeClass('huge').addClass('large');*/
   }
   else{
       $('#initial_menu').removeClass('large').addClass('huge');
       /*$('#get_started').removeClass('large').addClass('huge');*/
   }
})
.resize();//trigger the resize event on page load.





/*sidebar*/


$('#mobile_button').click(function(){
 $('.ui.sidebar')
  .sidebar('toggle')
;
 $('.ui.sidebar')
  .sidebar('setting', 'transition', 'overlay')
  .sidebar('toggle')
;  


});

/*sidebar end*/

/*terminal_icon*/
$('#terminal_icon')
  .transition('set looping')
  .transition('flash', '3000ms')
;
/*terminal_icon end*/

/*video*/

$('.ui.embed').embed();
/*video end*/


/*follow us on start*/
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
  
/*follow us on end*/


/*login modal start*/

 
/*madal login end*/

});/*ready end*/