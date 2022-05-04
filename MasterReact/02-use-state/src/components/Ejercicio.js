import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const Ejercicio = ({ añoActual }) => {
    const [año, setAño] = useState([])
    
    const mostrarAño = () => {
        setAño(añoActual)
    }
    const sumarAño = (e, año) => {
        console.log(año)
        año++;
        setAño(año)
    }
    const restarAño = (e,año) => {
        año--;
        setAño(año)
    }
    const ingresarAño = (e, año) => {
        setAño(año)
    }  
    const resetAño = (e, año) => {
        setAño()
    }
    return (
    <div>
        <h1>Mi ejercicio</h1>
        <input type='text' placeholder='Ingresa tu año' onChange={e => ingresarAño(e, e.target.value)}/>
        <h1>{año}</h1>
        <button onClick={e => restarAño(e, año)}>-</button>
        <button onClick={mostrarAño}>Mostrar año</button>
        <button onClick={e => sumarAño(e, año)}>+</button>
        <br/>
        <button onClick={e => resetAño(e, año)}>Reset</button>
        
        <hr />
        
    </div>
  )
}

Ejercicio.propTypes = {
    añoActual: PropTypes.number.isRequired
}


