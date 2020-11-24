const carouselQueue = document.querySelector('.carousel-container');
const carouselQueueDisney = document.querySelector('.carousel-disney');

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const leftArrowDisney = document.getElementById('left-disney');
const rightArrowDisney = document.getElementById('right-disney');

rightArrow.addEventListener('click', () => {
	carouselQueue.scrollLeft += carouselQueue.offsetWidth;
});

leftArrow.addEventListener('click', () => {
	carouselQueue.scrollLeft -= carouselQueue.offsetWidth;
});

rightArrowDisney.addEventListener('click', () => {
	carouselQueueDisney.scrollLeft += carouselQueueDisney.offsetWidth;
});

leftArrowDisney.addEventListener('click', () => {
	carouselQueueDisney.scrollLeft -= carouselQueueDisney.offsetWidth;
});
