$(document).ready(function () {
    $('.js-info-more-button').on('click', function () {
        $(this).toggleClass('show');
        $(this).siblings('.js-info-more-text').toggleClass('show');
    });
});
