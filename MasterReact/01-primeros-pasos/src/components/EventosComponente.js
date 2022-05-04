import React from 'react'

export const EventosComponente = () => {


  const hasDadoClick = (e, nombre) => {
      
      alert('Has dado Click ' + nombre )
  }
  
  function hasDadoDobleClick(e){
      alert('Has dado docle Click')
  } 

  function hasEntrado(e, accion){
      alert("Has" + accion + "a la caja")

  }
   function hasSalido(e, accion){
    alert("Has" + accion + "de la caja")
   }
// 
   const estasDentro = (e) => {
       console.log('Estas Dentro del input')
   }
   const estasFuera = (e) => {
       console.log('Estas fuera del input')
   }
  
  return (
    <>
        <h1>
            Eventos en REACT
        </h1>
        
        <h3>
            Evento de un click
            {/* EVENTO CLICK */}
            <br />
            <button onClick={e => hasDadoClick(e, 'Daniel')}>Click</button>
        </h3>
        <h3>
            Evento doble click
            {/* EVENTO DOBLE CLICK */}
            <br/>
            <button onDoubleClick={hasDadoDobleClick}>Doble Click</button>
        </h3>
        <div id='caja' 
            onMouseEnter={e =>hasEntrado(e, "entrado")}
            onMouseLeave={e => hasSalido(e, "salido")}
        >
            <h2>Pasa por encima</h2>
        </div>
        <p>
            <input 
                type='text'
                placeholder='Introduce tu nombre'
                onFocus={e => estasDentro(e)}
                onBlur={e => estasFuera(e)}
            />
        </p>
        
    </>
  )
}
