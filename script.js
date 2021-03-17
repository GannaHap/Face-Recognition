// Show Navbar
var documentHTML = $(document);
const nav = $('nav')[0];
let lastScroll = 0;

documentHTML.on('scroll', () => {
  let currentScroll = $(this).scrollTop();
  if (currentScroll > lastScroll) {
    $('nav').addClass('show');
    $('.menu').addClass('show');
  } else {
    $('nav').removeClass('show');
    $('.menu').removeClass('show');
  }
});

// On Active Link
$('.menu a').on('click', (e) => {
  $.each($('.menu a'), (index, a) => {
    a.classList.remove('onActive');
  });
  e.target.classList.add('onActive');
});

// Menu Toggle (Hamburger Menu)
const menuIcon = $('.menu-toggle');
const menu = $('.menu');
menuIcon.on('click', function (e) {
  let classIcon = e.target.classList.value;
  if (classIcon === 'fas fa-bars') {
    e.target.remove();
    menuIcon.append('<i class="fas fa-times"></i>');
    menu.addClass('active');
  } else {
    e.target.remove();
    menuIcon.append('<i class="fas fa-bars"></i>');
    menu.removeClass('active');
  }
});
