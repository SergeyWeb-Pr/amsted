$(document).ready(function () {

    // $('.js-button-video').on('click', function () {
    //     let srcVideo = $(this).attr('data-src');
    //     $(".js-modal-video").children('source').attr('src', srcVideo);
    //     $(".js-modal-video")[0].load();
    // });

    function pauseVideos() {
        $('.js-modal-video').each(function () {
            this.pause();
        });
    }

    $(document).on('click', '.graph-modal, .js-modal-close', function () {
        pauseVideos();
    });
});
