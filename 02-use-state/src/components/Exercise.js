import React, { useState } from 'react'
import Proptypes from 'prop-types'

export const Exercise = ({year}) => {
    const [ date, setDate] = useState(year)
    
    const cambiarYear = (e) => {
        let yearInput = parseInt(e.target.value)

        if(Number.isInteger(yearInput) && yearInput <= 2050 && yearInput >= 1600){
            setDate(yearInput)
        }else{
            setDate(year)
        }
    }

    const plusDate = () => {
        setDate(date + 1)
    }
    const minusDate = () => {
        setDate(date - 1)
    }
  return (
    <>
        <h2>Ejercicio</h2>
        <div className='exercise-container'>
            
            <button id='minus' onClick={() => minusDate()}>-</button>
            <div id='year'>
                {date}
            </div>
            <button id='plus' onClick={() => plusDate()}>+</button>
            <br />
        </div>
        <div id='input'>
                <input 
                    type="text" 
                    placeholder="year"
                    onChange={e => cambiarYear(e)} />
        </div>
    </>
  )
}

//Validar parametros
Exercise.propTypes = {
      year: Proptypes.number.isRequired
  }
