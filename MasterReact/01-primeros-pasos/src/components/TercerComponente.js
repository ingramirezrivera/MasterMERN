import React from 'react'
import PropTypes  from 'prop-types'

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

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string,
    fichaMedica: PropTypes.object
}

TercerComponente.defaultProps = {
    nombre: "Your name",
    apellidos: 'Your Lastname'
}