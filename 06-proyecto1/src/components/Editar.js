import React from 'react'

export const Editar = ({ peli, getMovies, setEdit, setListState }) => {

    const titulo_componente = "Editar película";

    const saveEdit = (e, id) => {
        e.preventDefault()
        
        //conseguir el target del evento
        let target = e.target
        
        //Buscar el indice de la pelicula a actualizar
        const pelis_almacenadas = getMovies()

        //Buscar el indice del array almacenado
        const index = pelis_almacenadas.findIndex(peli => peli.id === id)
        
        
        //crear obejto con ese index, titulo y descripcion del formulario
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }
        
        pelis_almacenadas[index] = peli_actualizada

        console.log(pelis_almacenadas)

        //Guardar el neuvo array de objetos en el localStorage
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas))

        // y actualizar estados
        setListState(pelis_almacenadas)
        setEdit(0)

        

    }

  return (
    <div className="edit-form">
        
        <h3 className='title'>{titulo_componente}</h3>
        <form onSubmit={e => saveEdit(e, peli.id)}>
                <input 
                    type="text"
                    name="titulo" 
                    className="titulo-editado"
                    defaultValue= {peli.titulo}
                />
                <textarea 
                    name="descripcion"
                    defaultValue={peli.descripcion}
                    className="descripcion_editada">

                </textarea>
                <input 
                    type="submit" 
                    className="edit"
                    value="Actualizar"
                />
            </form>
    </div>
  )
}