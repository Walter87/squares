function reset(){ 
  $('.container > div').css({"background-color":"red","opacity": "1.0"});
};

function addColor() {
  $(this).css({"background-color":get_random_color, "opacity": "-=0.1"});
}

function get_random_color() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

$(document).ready(function(){
  x = prompt("Give me number of squares in one row, please. (number must be lower than 64)");
  width = $('.container').width()/x;

  for (i=1; i <= Math.pow(x,2) ; i++) {
  $('.container').append("<div style = 'display: inline-block; width:"+width+"px; height: "+width+"px; background-color: red;'</div>");
  }
  
  $('.container > div').mouseover(addColor);

  $('button').on('click', reset);
});

