const button = document.querySelector("button");

const cards = document.querySelectorAll('.cards');

console.log(button);
console.log(document.querySelector('.cards'));
console.log(document.querySelectorAll('.cards'));

button.addEventListener("click", function () {



    for (i = 0; i < 5; i++) {
        cards[i].classList.toggle("active");
        cards[i].style.transitionDelay = (0.25 * i) + "s";
    }
});

