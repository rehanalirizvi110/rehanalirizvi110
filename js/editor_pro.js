$(document).ready(function(){

  /*popup meassage*/
  $("#message").mouseenter(function(){
    $(this).css({"marginTop":"-2px"});
    $(this).popover('show');
  });
  $("#message").mouseleave(function(){
    $(this).css({"marginTop":"0px"});
    $(this).popover('hide');
  });
  /*popup meassage end*/



/*message modal*/
  $("#message").click(function(){
    $('#message_modal').modal({backdrop: false});
  });  
/*message modal end*/

/*sidebar*/
  $("#exercise_button").click(function(e) {
    
  sidebarData();

  /*sidebarLink */
  
/*
$('#sidebar5').click(function(){
      document.getElementById('mainHeading').innerHTML = mainHeading;
      document.getElementById('heading').innerHTML = course[5].heading;
      document.getElementById('content').innerHTML = course[5].content;
      document.getElementById('taskContent').innerHTML = course[5].taskContent;
      document.getElementById('help').innerHTML = course[5].help;
      previousCode = course[5].code;
      editor.setValue(previousCode,1);
});*/
  
/*sidebarLink end*/
    
    e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        if($('#exercise_icon').hasClass("sidebar")){
          $('#exercise_text').text('Close');
          $('#exercise_icon').removeClass('sidebar');

          $('#exercise_icon').addClass('remove');
        }else{
            $('#exercise_text').text('Exercise');
            $('#exercise_icon').removeClass('remove');
            $('#exercise_icon').addClass('sidebar');
        }
    });

  
  
/*sidebar*/


/*next back button validation*/
$('#show_me').click(function(){
  if($('#help').css('display') == 'none'){
        $('#help').css({"display":"block"}),
        $('#show_me').text('Hide me');
      }
    else{
      $('#help').css({"display":"none"}),
      $('#show_me').text('Show me');
    }  
      
  });

$('#nxt').click(function(){
  if($('#help').css('display') == 'block'){
      $('#show_me').text('Show me');
      $('#help').css({"display":"none"});
    }
});
$('#bck').click(function(){
   if($('#help').css('display') == 'block'){
      $('#show_me').text('Show me');
      $('#help').css({"display":"none"});
    }
});
/*next back button validation end*/
  

//..................reset ........................//
$('#reset_button').click(function(){
  $('#reset_button').addClass('loading');
  editor.setValue(previousCode,1);
  $('#reset_button').removeClass('loading');
});
//..................reset End........................//

/*console termina animation*/
$('#console_terminal')
  .transition('set looping')
  .transition('flash', '3000ms')
;

/*console termina animation end*/
  



});/*ready end*/