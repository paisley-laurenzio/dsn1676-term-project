var navTop = document.querySelector('.nav-top');

document.querySelector('.nav-btn').addEventListener('click', function (e) {

  e.preventDefault();

  if (navTop.getAttribute('data-state') == 'expanded') {
    navTop.setAttribute('data-state', 'collapsed');
    this.setAttribute('data-state', 'inactive');
  } else {
    navTop.setAttribute('data-state', 'expanded');
    this.setAttribute('data-state', 'active');
  }
});



interact('.tap-target')
  .on('tap', function (event) {
    event.currentTarget.classList.toggle('switch-bg');
    event.preventDefault();
  });


var $thumbs = $('.thumbnails');
var $lbImg = $('.lightbox-img');
var $lb = $('.lightbox');
var $btnClose = $('.btn-close');

$thumbs.on('click', 'a', function (e){
    e.preventDefault();
    var big = $(this).attr ('href');
    $lbImg.attr('src', big);
    $lb.attr('data-state', 'visible');
});

btnClose.on('click', function (){
    $lb.attr('data-state','hidden');
});