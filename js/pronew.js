$(document).ready(function() {
	
	$(window).resize(function(){
   console.log('resize called');
   var width = $(window).width();
   if(width <= 992 && width >= 768){
       $('#initial_menu').removeClass('huge').addClass('large');
   }
   else{
       $('#initial_menu').removeClass('large').addClass('huge');
   }
})
.resize();//trigger the resize event on page load.

});