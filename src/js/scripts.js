import {sendCallBackForm} from './send-data.js';
import {tabFirstClickHandler, tabSecondClickHandler} from './swiper.js';
import {maskPhone} from './mask.js';

maskPhone('input[type="tel"]');
sendCallBackForm();

document.querySelector('#tab1').addEventListener('click', tabFirstClickHandler);
document.querySelector('#tab2').addEventListener('click', tabSecondClickHandler);
