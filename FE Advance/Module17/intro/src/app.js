import css from "./css/style.css";
import jsfile from './js/script';

const hello = `<h1 class=${css.headline}>${jsfile}</h1>`;
document.body.innerHTML = hello;
