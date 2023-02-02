
import './style.css'
import { home } from './vistas/home';
import { admin } from './vistas/admin';
import { about } from './vistas/about';
import { registre } from './vistas/registre';
import { router } from './componentes/router';



document.querySelector('#home').innerHTML = home.template;
document.querySelector('#admin').innerHTML = admin.template;
document.querySelector('#about').innerHTML = about.template;
document.querySelector('#form').innerHTML = registre.template;