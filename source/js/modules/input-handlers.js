import {getRepositories} from './fetch.js';
import {isEnterKey} from '../utils/utils.js';

const inputElement = document.querySelector('.search__field');
const buttonElement = document.querySelector('.search__button');
const errorMessageElement = document.querySelector('.search__error-message');

const startSearch = () => {
  if (inputElement.value.length > 1) {
    getRepositories(inputElement.value);
    inputElement.classList.remove('search__field--error');
  } else {
    inputElement.classList.add('search__field--error');
    errorMessageElement.style.display = 'block';
  }
};

const startSearchHandler = () => {
  buttonElement.addEventListener('click', () => {
    startSearch();
  })
};

const inputErrorHandler = () => {
  inputElement.addEventListener('input', () => {
    inputElement.classList.remove('search__field--error');
    errorMessageElement.style.display = 'none';
  })
};

const inputEnterHandler = () => {
  inputElement.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      startSearch();
    }
  });
};



// const resultsListElement = document.querySelector('.results__list');

// function sayHi() {
//   const itemElement = document.createElement('li');
//   itemElement.innerHTML = `<p>${getRepositories(inputElement.value)[0].id}</p>`;

//   resultsListElement.appendChild(itemElement);
// };

// setTimeout(sayHi, 5000);




// setInterval( () => {
//   if (getRepositories(inputElement.value)) {
//     console.log('Еще нет');
//   } else {
//     console.log('ok');
//   }
// }, 2000);



  // const itemElement = document.createElement('li');
  // itemElement.innerHTML = `<p>${getRepositories(inputElement.value)[0].id}</p>`;

  // resultsListElement.appendChild(itemElement);



export {startSearchHandler, inputErrorHandler, inputEnterHandler}
