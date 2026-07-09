let tall = false;

document.querySelector('.js-button')
  .addEventListener('click', () => {
    let header = document.querySelector('header');
    if (tall) {
        header.style.height = '80px';
        tall = false;
        return ;
    }
    header.style.height = '250px';
    tall = true;
  })