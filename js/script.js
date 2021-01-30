$(document).ready(function() {
    let images = document.querySelectorAll('a');
    $('#search-bar').on('keyup', function() {
        let search = $(this).val().toLowerCase();
        for (let i = 0; i < images.length; i++) {
            input = images[i].getAttribute('data-caption');
            if (input.toLowerCase().indexOf(search) > -1) {
                images[i].style.display = '';
            } else {
                images[i].style.display = 'none';
            }
        }
    });
});
