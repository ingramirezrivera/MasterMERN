import React from 'react'

export const TercerComponente = ({nombre, apellidos, fichaMedica}) => {
  
    return (
    <div>
        <h2>Tercer componente</h2>
        <ul>
            <li>{nombre}</li>
            <li>{apellidos}</li>
            <li>{fichaMedica.rh}</li>
            <li>{fichaMedica.altura}</li>
        </ul>
    </div>
  )
}
