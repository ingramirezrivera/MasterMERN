import React, {useEffect, useState} from 'react'
import { AvisoComponent } from './AvisoComponent'
import { Saludos } from './Saludos'

export const PruebasComponent = () => {
    const [date, setDate] = useState("11-08-1986")
    const [user ,setUser] = useState("Pablo Ramírez")
    const [counter, setCounter] = useState(0)
    
    const cambiarFecha = (e) => {
        setDate("01-02-2019")

    }
    const handleInput = (e) => {
        const inputText = e.target.value
        setUser(inputText)
    }

    //Este useEffect se ejecuta cada vez que hay un cambio en el componente
    useEffect(() => {
        console.log("Se ejecuta cada vez que hay un cambio")
    })
    //Este useEffect solo se ejecuta una vez
    useEffect(() => {
        console.log("useEffect solo se ejecuta una vez")
    },[])
    //Se ejecuta cada vez que cambia un estado en especifico del componente
    useEffect(() => {
        console.log("Se modifico el usuario")
        setCounter(counter+1)
        console.log(counter)
    }, [user, date])



  return (
    <div>
        <h1>El efecto -useEffect</h1>
        <h2>Date: {date}</h2>
        <h2 className={counter <= 10 ? 'label' : 'label-green'}>{user}</h2>
        <h2>Cambios en el user {counter}</h2>
        <input 
            type="text" 
            placeholder="Cambia el nombre"
            onChange={e => handleInput(e)} 
        />
        <br />
        <button onClick={e => cambiarFecha(e)}>Cambiar fecha</button>
        <hr />
        
        {counter >= 20 && <AvisoComponent />} 
        <hr />
        <h2>Componente para saludar</h2>
        {user === "Daniel" && <Saludos name={"Daniel"}/>}
    </div>
  )
}
