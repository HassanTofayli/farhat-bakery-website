const track = document.querySelector('.carousel_track')
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button_right');
const prevButton = document.querySelector('.carousel_button_left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);
const trackWidth = document.querySelector('.carousel_track-container').getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = trackWidth / 3.6 + index * slideWidth + 'px';

}
slides.forEach(setSlidePosition);

const moveToSlide = (currentSlide, targetSlide) => {
    const initial = trackWidth / 3.6;
    const prevSlide = targetSlide.style.left;
    const amountToMove = parseFloat(prevSlide) - parseFloat(initial);
    console.log("initial: " + initial + ", prevSlide: " + prevSlide + ", amountToMove: " + amountToMove);
    if (targetSlide.matches('.first_slide')) {
        track.style.transform = 'translateX(0px)';
    } else
        track.style.transform = 'translateX(-' + amountToMove + 'px)';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
    const indexTarget = slides.indexOf(targetSlide);
    const indexPrev = slides.indexOf(currentSlide);
    console.log(indexTarget);
    console.log(indexPrev);
    console.log(dotsNav.children.item(indexPrev).children.item(0).src);
    const prevNavBtn = dotsNav.children.item(indexPrev).children.item(0);
    const targetNavBtn = dotsNav.children.item(indexTarget).children.item(0);
    prevNavBtn.src = 'images/testing/carousel/carousel_dot.png';
    targetNavBtn.src = 'images/testing/carousel/carousel_dot_active.png';
    prevNavBtn.classList.remove('indicator_active_img');
    targetNavBtn.classList.add('indicator_active_img');
};
//next slide
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const targetSlide = currentSlide.nextElementSibling;
    moveToSlide(currentSlide, targetSlide);
});
//prev slide
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const targetSlide = currentSlide.previousElementSibling;
    moveToSlide(currentSlide, targetSlide);
});
const currentSlide = track.querySelector('.current_slide');
const targetSlide = currentSlide.nextElementSibling;
moveToSlide(currentSlide, targetSlide);


const carousel_imgs_width = track.querySelector('.carousel_image').width;
const carousel_imgs_height = track.querySelector('.carousel_image').height;
console.log(carousel_imgs_width);
document.querySelector('.youtube_video_img').width = carousel_imgs_width;
document.querySelector('.youtube_imbedded').width = carousel_imgs_width;
document.querySelector('.youtube_imbedded').height = carousel_imgs_height;
document.querySelectorAll('.carousel_img_shadow').forEach(e => e.width = carousel_imgs_width);
document.querySelectorAll('.carousel_img_shadow').scale = 0.5;
document.querySelector('.current_slide .carousel_img_shadow').scale = 1;
