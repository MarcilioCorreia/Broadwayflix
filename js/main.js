const carouselQueue = document.querySelector('.carousel-content');
const shows = document.querySelectorAll('.show');

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// Right Arrow - Event Listener
rightArrow.addEventListener('click', () => {
    carouselQueue.scrollLeft += carouselQueue.offsetWidth;

    const activeGuide = document.querySelector('.guides .active')
    if(activeGuide.nextSibling) {
        activeGuide.nextSibling.classList.add('active');
        activeGuide.classList.remove('active');
    }
});

// Left Arrow - Event Listener
leftArrow.addEventListener('click', () => {
    carouselQueue.scrollLeft -= carouselQueue.offsetWidth;

    const activeGuide = document.querySelector('.guides .active')
    if(activeGuide.previousSibling) {
        activeGuide.previousSibling.classList.add('active');
        activeGuide.classList.remove('active');
    }

});

// Guide Pages
const pageNumber = Math.ceil(shows.length / 5);
for(let i = 0; i < pageNumber; i++) {
    const guide = document.createElement('button');

    if(i === 0) {
        guide.classList.add('active');
    }
    document.querySelector('.guides').appendChild(guide);
    guide.addEventListener('click', (e) => {
        carouselQueue.scrollLeft = i * carouselQueue.offsetWidth;

        document.querySelector('.guides .active').classList.remove('active');
        e.target.classList.add('active');
    });
}

/* Hover */
shows.forEach((show) => {
    show.addEventListener('mouseenter', () => {
        const element = e.currentTarget;
        setTimeout(() => {
            shows.forEach(show => show.classList.remove('.hover'));
            element.classList.add('hover');
        }, 3000);
    });
});

carouselQueue.addEventListener('mouseleave', () => {
    shows.forEach(show => show.classList.remove('hover'));
});