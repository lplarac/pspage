document.addEventListener('DOMContentLoaded', function() {
    var titles = document.getElementsByClassName('section-title');

    for (var i = 0; i < titles.length; i++) {
        titles[i].addEventListener('click', function() {
            var content = this.nextElementSibling;

            // Toggle the 'active' class for the title (optional, for styling)
            this.classList.toggle('active');

            if (content.style.maxHeight) {
                // Section is open, so close it
                content.style.maxHeight = null;
            } else {
                // Section is closed, so open it
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
});
