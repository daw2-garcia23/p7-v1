import { home } from "../vistas/home";
import { about } from "../vistas/about";
import { router } from "./router";
import { admin } from "../vistas/admin";


export const header ={

    template:`<nav>
        <ul>
            <li id="home">HOME</li>
            <li id="about">About</li>
        </ul>
    </nav>`,
    script:()=>{
        console.log('hola soy el header');
        document.querySelector('#home').addEventListener
        ('click',()=>{
            router.home();
        });
        document.querySelector('#about').addEventListener
        ('click',()=>{
            router.about();
        });
        document.querySelector('#admin').addEventListener
        ('click',()=>{
            router.admin();
        });
    }

}