const header = document.getElementById('header');
const link = document.querySelector('.nav-link');
const line = document.getElementById('line');


window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        header.style.background = 'white';
        link.style.color = '#1d1d1d';
        line.style.background = 'black';
    } else if(window.scrollY === 0) {
        header.style.background = 'transparent';
        link.style.color = '#fff';
        line.style.background = 'white';
    }
});

const input = document.getElementById('email');
const button = document.getElementById('form-btn');

function checkInput() {
    if(input.value.length < 3) {
        button.setAttribute('disabled', true);
    } else {
        button.removeAttribute('disabled');
    }
}


