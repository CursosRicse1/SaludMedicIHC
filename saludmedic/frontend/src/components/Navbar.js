import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './icons/Menu/index'
export default function Navbar({abrirCerrar}) {
    return (
        <div>
            <nav className = "flex justify-between items-center h-16 bg-blue-500 text-blue-100 relative shadow-sm">
                <Link to="/">logo</Link>
                <div className="px-4 cursor-pointer md:hidden" onClick={abrirCerrar}>

                    <Menu/>
                </div>
                <div className="pr-8 hidden md:block">
                    <Link to="/Noticias" className="px-4">Noticias</Link>
                    <Link to ="/Informacion" className="px-4">Informacion</Link>
                    <Link to = "/Login" className="px-4">Login</Link>
                    <Link to ="/registrar" className="px-4">registrar</Link>
                </div>
            </nav>
        </div>
    )
}
