import React, {useState} from 'react'

export const MiPrimerEstado = () => {
    const  [name, setName] = useState('Daniel')
    const nombreFijo = "Ana Maria Tamayo"
    const cambiarNombre = (e, nombreFijo) => {
        setName(nombreFijo)
        console.log(e.target)
    }
 
  return (
    <div>
        <h2>Mi primer estado</h2>
        <strong className='label'>{name}</strong>
        <button onClick={e => cambiarNombre(e, nombreFijo)}>Cambiar nombre por Ana María</button>
        <input 
            type='text' 
            onKeyUp={e => cambiarNombre(e, e.target.value )}
            placeholder="Cambia el nombre" />
    </div>
  )
}
