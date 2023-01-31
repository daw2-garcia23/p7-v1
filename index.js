import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import multiavatar from '@multiavatar/multiavatar/esm'


document.querySelector('main').addEventListener('click',(event)=>{
    console.log('Has hecho click')
    console.log(event.target)
    console.log(event.target.getAttribute('data-email'))//metodo pu
    console.log(event.target.dataset.email)//lo ha dicho el profe en clase
})
//par de imagenes que ponga y quita sombras (añadir y quitar clase)
//poner boton y una imagen y que muestre o oculte la imagen en funcion de lo que ponga en el boton



document.querySelector('#nombre').addEventListener('keyup',(event)=>{
    console.log(event.target.value)
    let svgCode = multiavatar(event.target.value)
    document.querySelector('#foto').innerHTML = svgCode
})
