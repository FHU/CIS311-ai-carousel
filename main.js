// Optional JavaScript to manually pause or resume the autoplay
document.querySelector('.carousel').addEventListener('mouseover', () => {
    document.querySelector('.carousel-images').style.animationPlayState = 'paused';
});

document.querySelector('.carousel').addEventListener('mouseout', () => {
    document.querySelector('.carousel-images').style.animationPlayState = 'running';
});

// let currentIndex = 0;

// function showSlide(index) {
//     const slides = document.querySelectorAll('.carousel-images img');
//     if (index >= slides.length) {
//         currentIndex = 0;
//     } else if (index < 0) {
//         currentIndex = slides.length - 1;
//     } else {
//         currentIndex = index;
//     }
//     const offset = -currentIndex * 100;
//     document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
// }

// function nextSlide() {
//     showSlide(currentIndex + 1);
// }

// function prevSlide() {
//     showSlide(currentIndex - 1);
// }

// // Initial display of the first slide
// showSlide(currentIndex);