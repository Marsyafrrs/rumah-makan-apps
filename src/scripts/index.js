import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './view/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import './component/nav';
import './component/ulasan';

const app = new App({
  button: document.querySelector('.menu'),
  drawer: document.querySelector('nav ul'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
