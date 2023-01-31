import { about } from "../vistas/about";
import { admin } from "../vistas/admin";
import { home } from "../vistas/home"


export const router = {
    home :()=>{
        document.querySelector('#home').addEventListener('click', ()=>{
            home.template;
                home.script()
        })
    },
    admin :()=>{
        document.querySelector('#admin').addEventListener('click', ()=>{
            admin.template;
                admin.script()
        })
    },
    about :()=>{
        document.querySelector('#about').addEventListener('click', ()=>{
            about.template;
                about.script()
        })
    }
}