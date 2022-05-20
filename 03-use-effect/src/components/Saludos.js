import React, { useEffect } from 'react'

export const Saludos = ({name}) => {
    
    useEffect(() => {
        //Cuando se monta el componente
        alert("El componente se ha montado")
        return () => {
            alert("componente desmontado")
        }
    }, [])
   

  return (
    <div>
        <h1>Bienvenido {name}</h1>
    </div>
  )
}
