import React, { useEffect, useState } from 'react'
import DropDown from './DropDown';
import Navbar from './Navbar'

export default function Layout() {
    const [isAbrir,setIsAbrir] = useState(false);

    useEffect(() => {
        const ocultarMenu = () =>{
            if(window.innerWidth >768 && isAbrir){
                setIsAbrir(false)
            }
        };
   

    
    window.addEventListener("resize" , ocultarMenu);
    return()=>{
        window.removeEventListener("resize" , ocultarMenu);
    }
    });

    const toggleOpen = () => {
      setIsAbrir(!isAbrir);
    };

    return (
        <div>
             <Navbar abrirCerrar = {toggleOpen}/>
             {isAbrir &&  <DropDown abriCerrarEvents={toggleOpen}/> }
            
        </div>
    )
}
