// Подключение свайпера
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
Swiper.use([Navigation, Pagination, Autoplay]);

const swiperIntro = new Swiper('.intro-swiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    navigation: {
        prevEl: ".intro-swiper__swiper-button-prev",
        nextEl: ".intro-swiper__swiper-button-next"
    },
    pagination: {
        el: '.intro-swiper__swiper-pagination',
        clickable: true
    },
});

let swiperEquipmentCount = document.querySelectorAll('.equipment-swiper');
let num = 1;
swiperEquipmentCount.forEach(() => {
    const swiperEquipment = new Swiper(`.equipment-swiper-${num}`, {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: false,
        navigation: {
            prevEl: `.equipment-swiper__swiper-button-prev-${num}`,
            nextEl: `.equipment-swiper__swiper-button-next-${num}`,
        },
        pagination: {
            el: `.equipment-swiper__swiper-pagination-${num}`,
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            769: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            1201: {
                slidesPerView: 6,
                spaceBetween: 20
            },
            1367: {
                slidesPerView: 3,
                spaceBetween: 10,
            }
        }
    });
    num += 1;
});

const swiperBrands = new Swiper('.brands-swiper', {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: false,
    navigation: {
        prevEl: ".brands-swiper__swiper-button-prev",
        nextEl: ".brands-swiper__swiper-button-next"
    },
    pagination: {
        el: '.brands-swiper__swiper-pagination',
        clickable: true
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        769: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1201: {
            slidesPerView: 6,
            spaceBetween: 20
        },
        1367: {
            slidesPerView: 5,
            spaceBetween: 10,
        }
    }
});

const swiperNews = new Swiper('.news-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false,
    navigation: {
        prevEl: ".news-swiper__swiper-button-prev",
        nextEl: ".news-swiper__swiper-button-next"
    },
    pagination: {
        el: '.news-swiper__swiper-pagination',
        clickable: true
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        769: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1201: {
            slidesPerView: 6,
            spaceBetween: 20
        },
        1367: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});