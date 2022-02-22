var header = document.querySelector('header');
var menuButton = document.querySelector('#menuBtn').addEventListener('click', function(){
    this.classList.toggle('ri-xbox-fill');
    header.classList.toggle('toggle');
});

window.addEventListener('scroll', function(){
    menuButton.classList.remove('ri-xbox-fill');
    header.classList.remove('toggle');
});
