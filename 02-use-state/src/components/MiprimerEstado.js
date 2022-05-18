import React, { useState } from 'react'

export const MiprimerEstado = () => {

    const [name, setName] = useState('Pablo Ramírez')

    
    const cambiarNombre = (e, nombre) => {
        setName(nombre)
    }
  return (
    <div>
        <hr />
        <h2>Mi primer Estado</h2>
        <strong>
            {name}
        </strong>
        <br />
        <button onClick={e => {cambiarNombre(e, "Mariana")}}>
            Cambiar Nombre
        </button>
        <br />
        <input type="text" onKeyUp={e => cambiarNombre(e, e.target.value)}/>
        <hr />
    </div>
  )
}
