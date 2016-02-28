$(function(){

  // ... 省略

  // 読み込み時にスクロールを行う
  var location = window.location;

  if( !/[;:]/.test(location.hash) && $(location.hash).size() > 0 ){
    var $target = $(location.hash),
        top;

    location.hash = "";

    top = $target.offset().top;
    top = Math.min(top, $doc.height() - $win.height());

    $doc.on(mousewheel, function(e){ e.preventDefault(); });

    $scrollElement.stop().animate({scrollTop: top}, 1000, "easeOutQuint", function(){
      $doc.off(mousewheel);
      $("#counter").text( parseInt($("#counter").text()) + 1 );
    });
  }

});