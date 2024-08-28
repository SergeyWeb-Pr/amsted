$(document).ready(function () {
    $('.js-modal-close').on('click', function () {
        $('video').each(function () {
            this.pause();
        });
    });
});
