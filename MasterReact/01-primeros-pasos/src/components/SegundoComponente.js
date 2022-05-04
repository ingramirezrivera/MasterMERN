import React from 'react'

export const SegundoComponente = () => {
    // const libros = ['Harry Potter', 'Juego de Tronos', 'Clean Code'];
    const libros = []
  return (
    <div className='segundo-componente'>
        <h2>Listado de libros</h2>
        {libros.length >= 1 ? (
            <ul>
                {
                    libros.map((libro,index) => {
                        return <li key={index}>{index}{libro}</li>
                    })   
                }
            </ul> )
            : (<p>No hay libros para mostrar</p>)
        }
    </div>
  )
}
