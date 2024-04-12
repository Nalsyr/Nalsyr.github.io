document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    var navBar = document.querySelector('.nav-bar');
    if (navBar.getAttribute('id') === 'open') {
        navBar.removeAttribute('id');
    } else {
        navBar.setAttribute('id', 'open');
    }
});