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
                slidesPerView: 1,
                spaceBetween: 10
            },
            769: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            1201: {
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
            spaceBetween: 10
        },
        769: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1201: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
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
            slidesPerView: 1,
            spaceBetween: 20
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1201: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1367: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});

var swiperImagesGallery = new Swiper('.images-gallery-swiper', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 16,
    watchSlidesProgress: true,
    navigation: {
        prevEl: ".images-gallery__swiper-button-prev",
        nextEl: ".images-gallery__swiper-button-next",
    },
});
var swiperImagesGalleryThumbs = new Swiper('.images-gallery-swiper-thumbs', {
    spaceBetween: 15,
    slideToClickedSlide: true,
    loop: false,
    slidesPerView: 5,
    watchSlidesProgress: true,
    navigation: {
        prevEl: ".images-gallery-thumbs__swiper-button-prev",
        nextEl: ".images-gallery-thumbs__swiper-button-next",
    },
    breakpoints: {
        320: {
            spaceBetween: 4,
            slidesPerView: 5
        },
        769: {
            spaceBetween: 15,
            slidesPerView: 5
        }
    }
});

const swiperImages = new Swiper('.images-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    navigation: {
        prevEl: ".images-swiper__swiper-button-prev",
        nextEl: ".images-swiper__swiper-button-next"
    },
    pagination: {
        el: '.images-swiper__swiper-pagination',
        clickable: true
    },
});

const swiperCatalogCategory = new Swiper('.catalog-category-swiper', {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: false,
    navigation: {
        prevEl: ".catalog-category-swiper__swiper-button-prev",
        nextEl: ".catalog-category-swiper__swiper-button-next"
    },
    pagination: {
        el: '.catalog-category-swiper__swiper-pagination',
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
            slidesPerView: 4,
            spaceBetween: 15,
        }
    }
});

var swiperCardIntro = new Swiper('.card-intro-swiper', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 16,
    watchSlidesProgress: true,
    navigation: {
        prevEl: ".card-intro__swiper-button-prev",
        nextEl: ".card-intro__swiper-button-next",
    },
    pagination: {
        el: ".card-intro__swiper-pagination",
        type: "fraction",
      },
});
var swiperCardIntroThumbs = new Swiper('.card-intro-swiper-thumbs', {
    spaceBetween: 15,
    slideToClickedSlide: true,
    loop: false,
    slidesPerView: 3,
    watchSlidesProgress: true,
    breakpoints: {
        769: {
            spaceBetween: 15,
            slidesPerView: 3
        },
        320: {
            spaceBetween: 8,
            slidesPerView: 4
        },
    }
});

const swiperCardOther = new Swiper('.card-other-swiper', {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: false,
    navigation: {
        prevEl: ".card-other-swiper__swiper-button-prev",
        nextEl: ".card-other-swiper__swiper-button-next"
    },
    pagination: {
        el: '.card-other-swiper__swiper-pagination',
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
            slidesPerView: 4,
            spaceBetween: 15,
        }
    }
});