import React from 'react'
import { Link } from 'react-router-dom'

export default function SigninScreen() {
    return (
        <div>
            <label>Apellido</label>
            <input type="text" placeholder="Apellido"></input>
            <label>Codigo</label>
            <input type="text" placeholder="Codigo del usuario"></input>
            <div>Si no tienes una cuenta 
                <Link className="text-blue-700" to="/Register"> Registrate</Link>
            </div>
        </div>
    )
}
