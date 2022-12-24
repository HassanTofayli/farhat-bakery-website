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
    slide.style.left = trackWidth / 3.3 + index * slideWidth + 'px';

}
slides.forEach(setSlidePosition);

const moveToSlide = (currentSlide, targetSlide) => {
    const initial = trackWidth / 3.3;
    const prevSlide = targetSlide.style.left;
    const amountToMove = parseFloat(prevSlide) - parseFloat(initial);
    console.log("initial: " + initial + ", prevSlide: " + prevSlide + ", amountToMove: " + amountToMove);
    if(targetSlide.matches('.first_slide')){
        track.style.transform = 'translateX(0px)';
    }else
    track.style.transform = 'translateX(-' + amountToMove + 'px)';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
    const indexTarget = slides.indexOf(targetSlide);
    const indexPrev = slides.indexOf(currentSlide);
    console.log(indexTarget);
    console.log(indexPrev);
    console.log(dotsNav.children.item(indexPrev).children.item(0).src);
    dotsNav.children.item(indexPrev).children.item(0).src = 'images/testing/carousel/carousel_dot.png';
    dotsNav.children.item(indexTarget).children.item(0).src = 'images/testing/carousel/carousel_dot_active.png';
    //  = images/testing/carousel/carousel_dot_active.png;
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