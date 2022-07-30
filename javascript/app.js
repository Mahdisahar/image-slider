
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

slides.forEach(function(slide, index) {
 slide.style.left = `${index * 100}%`;
});

let counter = 0;

prevBtn.addEventListener('click', function() {
counter--;
carsoul();
});

nextBtn.addEventListener('click', function(){
counter++;
carsoul();
});


function carsoul() {
    slides.forEach(function(slide) {
     slide.style.transform = `translateX(-${ counter * 100}%)`;
    });
} 