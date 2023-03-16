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

export {startSearchHandler, inputErrorHandler, inputEnterHandler}
