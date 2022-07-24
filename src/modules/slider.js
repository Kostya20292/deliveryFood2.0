import Swiper, { Navigation, Pagination } from 'swiper';

export const slider = () => {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
};
