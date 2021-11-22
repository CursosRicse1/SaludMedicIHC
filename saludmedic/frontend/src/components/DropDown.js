import React from 'react'
import { Link } from 'react-router-dom'

export default function DropDown(abriCerrarEvents) {
    return (
        <div className="grid grid-rows-3 text-center items-center bg-blue-200" onClick={abriCerrarEvents}>
            <Link className="px-4" to="/">SaludMedic</Link>
            <Link className="px-4" to="/Noticas">Noticias</Link>
            <Link className="px-4" to="/Informacion">Informacion</Link>
            <Link className="px-4" to="/Login">Login</Link>
        </div>
    )
}
