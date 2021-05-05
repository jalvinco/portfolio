function openTab(tab) {
  var someTabTriggerEl = document.querySelector(tab)
  var tab = new bootstrap.Tab(someTabTriggerEl)
  backToTop();
  tab.show();
  if (tab == '#pills-photography-tab') {
    playVideos();
  }
}

function collapser() {
  var myCollapse = document.querySelector('#navmenu');
  if ($(myCollapse).hasClass('show')) {
    var bsCollapse = new bootstrap.Collapse(myCollapse, {
      hide: 1
    });
  }
}

function backToTop() {
    $('body,html').animate({
      scrollTop: 0
    }, 111, "linear");
    return false;
}

function playVideos() {
  $("body video").each(function( index ) {
    console.log("vids played");
    $(this)[0].play();
  });
}

$(window).scroll(function() {
     var height = $(window).scrollTop();
     if (height > 100) {
        $(".top-img").addClass("reduced");
     } else {
        $('.top-img').removeClass('reduced');
     }
 });
