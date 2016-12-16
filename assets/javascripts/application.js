$(document).mousemove(function(e){
  var $width = ($(document).width())/255;
  var $height = ($(document).height())/255;
  var $pageX = parseInt(e.pageX / $width,10);
  var $pageY = parseInt(e.pageY / $height,10);
  $("body").css("background", "linear-gradient(135deg, rgb(112, "+$pageX+", "+$pageY+"), rgb(255, "+$pageY+", "+$pageX+")" );
});
(function() {


}).call(this);
