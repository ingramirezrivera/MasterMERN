import React from 'react'
import  PropTypes from 'prop-types'


export const TercerComponente = ({nombre, apellido, ficha}) => {
  return (
    <div>
        <h2>Comunicacion entre componentes</h2>
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>{ficha.grupo}</li>
            <li>{ficha.altura}</li>
            <li>{ficha.estado}</li>
            <li>{ficha.alergias}</li>
        </ul>

    </div>
  )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    ficha: PropTypes.object
}

TercerComponente.defaultProps = {
    nombre: "Ana Maria",
    apellido: "Tamayo",
    ficha: {
        altura: 1.55,
        estado: "casada",
        alergias: "A los gatos"
    }

} 