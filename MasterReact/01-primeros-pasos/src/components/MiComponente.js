import React from "react";

const MiComponente =  () => {
    const nombre  = "Daniel";
    let web = "canalua.com";

    let usuario = {
        nombre: "Daniel",
        apellidos: 'Ramirez Rivera',
        cedula: 1128264974,
        email: 'ing.ramirezrivera@gmail.com',
    }
    console.log(usuario)
    return (
        <div>
            <hr/>
            <h2>Componente creado</h2>
            <h3>Datos del usuarios</h3>
            <ul>
                <li>Nombre: {usuario.nombre}</li>
                <li>Apellidos: {usuario.apellidos}</li>
                <li>Cedula: {usuario.cedula}</li>
                <li>Email: {usuario.email}</li>
                
            </ul>

            <p>Este es mi primer componente</p>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Angular
                </li>
                <li>
                    Vue
                </li>
            </ul>
        </div>
    )
}

export default MiComponente;