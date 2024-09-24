document.addEventListener('DOMContentLoaded', function() {
    var titles = document.getElementsByClassName('section-title');

    for (var i = 0; i < titles.length; i++) {
        titles[i].addEventListener('click', function() {
            var content = this.nextElementSibling;
            content.classList.toggle('show');
        });
    }
});
