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

});/*ready end*/