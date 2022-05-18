import React from 'react'

export const SegundoComponente = () => {

    const libros = ["Harry Potter", "Juego de Tronos", "Clean Code"];

  return (
    <div className='segundo-componente'>
        <h2>Segundo componente</h2>
        <p>Por index</p>
        <li>{libros[0]}</li>
        <li>{libros[1]}</li>
        <li>{libros[2]}</li>
        <br />
        <p>Por Map</p>
        {
            libros.length >= 1 ? (
                <ul>
                    {
                    libros.map((libro, index) => <li key={index}>{libro}</li>)
                    }
                </ul>
            ) : (
                <p>No se han encontrado libros</p>
            )
        }
    </div>
  )
}
