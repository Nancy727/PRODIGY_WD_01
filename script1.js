$(document).ready(function () {
    $('.dropdown-toggle').dropdown();
});
/* JavaScript to handle the scroll event */
document.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
