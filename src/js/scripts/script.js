$(document).ready(function () {


    // Обработчик клика по кнопке для открытия модального окна и установки источника видео
    $('.js-button-video').on('click', function () {
        let srcVideo = $(this).attr('data-src');
        $(".js-modal-video").children('source').attr('src', srcVideo);
        $(".js-modal-video")[0].load();
    });

    // Функция для установки паузы на все видео
    function pauseVideos() {
        $('.js-modal-video').each(function () {
            this.pause();
        });
    }

    // Событие клика на модальное окно (если нужно)
    $('.graph-modal').on('click', function () {
        pauseVideos();
    });

    // Событие клика на кнопку закрытия модального окна
    $('.js-modal-close').on('click', function () {
        pauseVideos();
    });
});
