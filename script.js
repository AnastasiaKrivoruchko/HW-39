const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
]
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
const slideImg = document.querySelector('.slide-img');

let currentImageIndex = 0;
slideImg.src = images[currentImageIndex];
prevBtn.disabled = true;

prevBtn.addEventListener('click', () =>{
    currentImageIndex--;
    slideImg.src = images[currentImageIndex];
    currentImageIndex === 0 ? prevBtn.disabled = true : nextBtn.disabled = false;
});

nextBtn.addEventListener('click', () =>{
    currentImageIndex++;
    slideImg.src = images[currentImageIndex];
    currentImageIndex === (images.length - 1) ? nextBtn.disabled = true : prevBtn.disabled = false;
});
 