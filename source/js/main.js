import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {startSearchHandler, inputErrorHandler, inputEnterHandler} from './modules/input-handlers.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------


  inputEnterHandler();
  startSearchHandler();
  inputErrorHandler();


  // const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:name');


  // Octokit.js
// https://github.com/octokit/core.js#readme
  // const octokit = new Octokit({
  //   auth: 'YOUR-TOKEN'
  // })

  // await octokit.request('GET /search/code', {
  //   headers: {
  //     'X-GitHub-Api-Version': '2022-11-28'
  //   }
  // })







  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------


// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

