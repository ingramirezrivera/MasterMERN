import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const CrearPeli = ({setListState}) => {

    const tituloComponente = "Añadir película";
    const [movie, setMovie] = useState({
        titulo: '',
        decripcion: ''
    }) 

    const {titulo, descripcion} = movie;

    const getForm = (e) => {
        e.preventDefault()

        let target = e.target;

        //conseguir datos del formulario
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;
        alert(titulo + descripcion)

        //Crear objeto con la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }
        
        //guardar estado
        setMovie(peli)
        console.log(movie)

        //Actualizar el estado del listado principal
        setListState(elementos => {
            return [peli, ...elementos ]
        })


        //guardar en el local Storage
        GuardarEnStorage("pelis", peli)
        GuardarEnStorage("copia-datos", peli)
    }

    
 

  return (
    <>
        <div className="add">
            <h3 className="title">{tituloComponente}</h3> 
            <strong>
                {(titulo && descripcion) && "Has creado la película " + titulo}
            </strong>
            <form onSubmit={getForm}>
                <input 
                    type="text"
                    id="titulo"
                    name="titulo" 
                    placeholder="Titulo"
                />
                <textarea 
                    id="descripcion"
                    name="decripcion"
                    placeholder="Descripción">

                </textarea>
                <input 
                    type="submit" 
                    value="Guardar"
                />
            </form>
        </div>
    </>
    
  )
}
