$(document).ready(() => {
  $("#footer").load("/footer.html");

  $("#ff").on("click", () => {
    window.open("ff.html", "_self", false);
  });
  $("#atm").on("click", () => {
    window.open("atm.html", "_self", false);
  });
  $("#heartbee").on("click", () => {
    window.open("heartbee.html", "_self", false);
  });
  $("#audibant").on("click", () => {
    window.open("audibant.html", "_self", false);
  });
  $("#cs").on("click", () => {
    window.open("cs.html", "_self", false);
  });
  $("#projects-button").on("click", () => {
    $("#projects").show();
    $("#about").hide();
  });
  $("#about-button").on("click", () => {
    $("#projects").hide();
    $("#about").show();
  });

  //make nav bar sticky
  var stickyNavTop = $('.nav').offset().top;

  var stickyNav = function() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
      $('.nav').addClass('sticky');
    } else {
      $('.nav').removeClass('sticky');
    }
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });
  //pc
  if ($(window).width() >= 750) {
    $("#menu").hide();
    $(".menu").show();
    $(".menu").removeClass("nav");
  }

  //mobile
  $("#menu").on("click", () => {
    if ($(".menu").css('display') == "none") {
      $(".menu").show();
    } else {
      $(".menu").hide();
    }
  });

  $(".menu a").on("click", (event) => {
    if ($(window).width() <= 750) {
      $(".menu").hide();
      var link = $(event.target).attr("href");
      console.log($(link));
      var scrolled = scrolled + 300;
      $('html, body').animate({
        scrollTop: $(link).offset().top - 50
      }, 50);
    }
  });
});
