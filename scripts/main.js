$(document).ready(function(){
  width = $('.container').width()/16-6;

  for (i=1; i <= Math.pow(16,2) ; i++) {
  $('.container').append("<div style = 'display: inline-block; border:solid; width:"+width+"px; height: "+width+"px; background-color: red;'</div>");
  }
});

