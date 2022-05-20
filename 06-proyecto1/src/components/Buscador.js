import React, { useState } from 'react'

export const Buscador = ({listState, setListState}) => {

  const [search, setSearch] = useState('');
  const [ notFound, setNotFound] = useState(false);

  const searchMovie = (e) => {
    //crear estado y actualizarlo
    setSearch(e.target.value)
   
    //filtrar para buscar coincidencias
    let pelis_encontradas = listState.filter(peli => {
      return (
        peli.titulo.toLowerCase().includes(search.toLowerCase())

      )
    })
    
    //si noy hay busqueda llamar del local storage la lista de pelis
    if(search.length <= 1 || pelis_encontradas <= 0){
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"))
      setNotFound(true)
    }else{
      setNotFound(false)
    }
    
    //actualizar el estado principal con lo que he logrado filtrar
    console.log(pelis_encontradas)
    setListState(pelis_encontradas)

  }

  return (
    <>
       <div className="search">
            <h3 className='title'>Buscador:</h3>
            {(notFound == true && search.length > 1) && (
              <span className='not-found'>Peli no encontrada</span>
              )
            }
            <p>{search}</p>
            <form >
                <input 
                  type="text"
                  id="search_field"
                  name="search"
                  autoComplete="off"
                  value={search}
                  onChange={searchMovie} />
                <button>Buscar</button>
            </form>
        </div>
    </>
  )
}
