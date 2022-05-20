import React, { useEffect, useState } from 'react'
import { Editar } from './Editar'

export const Listado = ({listState, setListState}) => {

    const [edit, setEdit] = useState(0)

    useEffect(() => {
        console.log("Componente del listado de películas cargado")
        getMovies()
    },[])

    const getMovies = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"))
         
        setListState(peliculas)

        return peliculas
    }

    const deleteMovie = (id) => {
        //Consguir peliculas almacenadas
        let pelis_almacenadas = getMovies()
        //filtrar la pelicula que quiero eliminar del array
        //filtra todas las peliculas que son id diferente 
        let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id))

        console.log(pelis_almacenadas, nuevo_array_pelis)
        //actualizar estado del listado
        setListState(nuevo_array_pelis)

        //Actualizar los datos en el localStorage
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis))

        
    }
    console.log("listState", listState)

  return (
    <>
        {(listState !== null && listState.length !== 0) ? listState.map(peli => {
            return(
                <article key={peli.id} className="peli-item">
                    <h3 className="title">{peli.titulo}</h3>
                    <p className="descripcion">{peli.descripcion}</p>
                    <button className="edit" onClick={() => setEdit(peli.id)}>Editar</button>
                    <button className="delete" onClick={() => deleteMovie(peli.id)}>Borrar</button>
                    
                    {/* APARECE FORMULARIO DE EDITAR */}
                    {(edit === peli.id) && (
                        <Editar 
                            peli={peli}
                            getMovies={getMovies}
                            setEdit={setEdit}
                            setListState={setListState}/>
                    )}


                </article>
                
            )
            })
        : <h2 id="message-empty-movie">No hay pelis disponibles</h2>
            
        
        }
    </>
  )
}
