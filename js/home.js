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
    slide.style.left = trackWidth/3.3 + index * slideWidth + 'px';

}
slides.forEach(setSlidePosition);


const moveToSlide = () => {
    const initial = trackWidth/3.3;
    const prevSlide = targetSlide.style.left;
    track.style.transform = 'translateX(-' +  parseFloat(prevSlide)-parseFloat(initial) + 'px)';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
};
//next slide
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    const initial = trackWidth/3.3;
    const prevSlide = nextSlide.style.left;
    const amountToMove = parseFloat(prevSlide)-parseFloat(initial);
    track.style.transform = 'translateX(-' +  amountToMove + 'px)';
    currentSlide.classList.remove('current_slide');
    nextSlide.classList.add('current_slide');
});

