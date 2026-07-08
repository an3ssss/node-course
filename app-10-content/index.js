let count = 0;

let button = document.querySelector('.js-button')

function changeBackground() {
    button.style.color = 'white';
    if (count === 1) {
        button.style.backgroundColor = 'rgb(129, 9, 9)';
    }
    else if (count === 2) {
        button.style.backgroundColor = 'rgb(13, 9, 129)';
    }
    else if (count === 3) {
        button.style.backgroundColor = 'lightseagreen';
    }
    else if (count === 4) {
        button.style.backgroundColor = 'salmon';
    }
    else if (count === 5) {
        button.style.backgroundColor = 'rgb(240, 240, 240)';
        button.style.color = 'black';
    }
}

button.addEventListener('click', () => {
    if (count === 5) {
        count = 0;
    }
    count++;
    changeBackground();
})