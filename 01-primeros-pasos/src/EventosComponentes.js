import React from 'react'

export const EventosComponentes = () => {
    const user = "Pedro Pablo";

    const handleEvent = (e, nombre) => {
      
      alert("Has dado click al botón," + nombre)
    }

    const handleDoubleClick = (e) => {
      alert("Has dado double click")
    }
    const handleMouseEnter = (e, accion) => {
      alert("Has " + accion + " por encima")
    }
    const handleMouseLeave = (e, accion) => {
    alert("Has " + accion + " por encima")
    }
    const handleFocus = (e) => {
        console.log("On Focus")
    }
    const handleBlur = (e) => {
        console.log('On BLur')
    }

    return (
    <div>
        <h2>Eventos en React</h2>
       
        <div>
            <h3>Evento on click</h3>
            {
                <button onClick={e => handleEvent(e,"Victor")} >Click</button>
            }
        </div>
        
        <br />
        <div>
            <h3>Evento on onDoubleClick</h3>
            {
               
                <button onDoubleClick={e => handleDoubleClick(e, user)}>On doble Click</button>
            }
        </div>
        <div>
            <h3>Evento on Mouse Enter</h3>
            <div className='caja' onMouseEnter={e => {handleMouseEnter(e, "pasado")}}>
                <p>Pasa por encima</p>
            </div>

        </div>
        <div>
            <h3>Evento on Mouse Leave</h3>
            <div className='caja' onMouseLeave={e => {handleMouseLeave(e, "salido")}}>
                <p>Pasa por encima</p>
            </div>

        </div>
        <div>
            <h3>Input</h3>
            <input 
                type="text" 
                onFocus={e => handleFocus(e)}
                onBlur={e => handleBlur(e)}
                placeholder="introduce tu nombre"
            />
        </div>
        
        
    </div>
  )
}
