$(document).ready(function() {

  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e) {
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {

      var sectionOffset = $(this.hash).offset().top - 20;

      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
  })

  // Auto close navbar on clicking a link in it
  // Ref: https://stackoverflow.com/a/14250000/5614968
  $('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
  });
})

// Dark mode toggle

const defaultMode = "light-mode"; // if prefer scheme is not available
const body = document.querySelector("body");

const mode = checkSavedMode() ? checkSavedMode() : detectColorMode();
body.classList.add(mode);
const toggle = document.querySelector(".toggle-theme");
toggle.addEventListener("click", toggleClass);

function checkSavedMode() {
  return localStorage.getItem("color-mode");
}
function saveColorMode(value) {
  localStorage.setItem("color-mode", value);
}

function detectColorMode() {
  if ( window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark-mode";
  } else if (window.matchMedia) {
    return "light-mode";
  }
  return defaultMode;
}


function toggleClass() {
  // toggle body class selector
  $('body').toggleClass('light-mode dark-mode')

  body.classList.contains("dark-mode")
    ? saveColorMode("dark-mode")
    : saveColorMode("light-mode");
}