import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const EjercicioProfesor = ({year}) => {
    const [yearNow, setYearNow] = useState(year)

    const siguiente = (e) => {
        setYearNow(yearNow+1)
    }
    const anterior = (e) => {
        setYearNow(yearNow-1)
    }
    const cambiaYear = e => {
        let dato = parseInt(e.target.value)
        if(Number.isInteger(dato)) {
            console.log('La variable es entera');
            setYearNow(dato)
        }else{
            setYearNow(year)
        }
    }
  return (
    <div>
        <h1>Ejercicio Profesor</h1>
        <h2>Ejercicio con eventos y useState</h2>
        <strong className='label label-green'>{yearNow}</strong>
        <div>
            <button onClick={anterior}>Anterior</button>
            <button onClick={siguiente}>Siguiente</button>
            <input 
                type='text'     
                placeholder='Cambiar el año' 
                onChange={ cambiaYear } />
        </div>
    </div>
  )
}

EjercicioProfesor.propTypes = {
    year: PropTypes.number.isRequired
}

