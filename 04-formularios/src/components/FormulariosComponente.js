import React, { useState } from 'react'

export const FormulariosComponente = () => {

    const [user, setUser] = useState([])

   

    const getForm = (e) => {
        e.preventDefault()
        const data = e.target
        let userForm = {
            nombre: data.nombre.value,
            apellido: data.apellido.value,
            genero: data.genero.value,
            bio: data.bio.value
        }
        
        console.log(userForm)

        setUser(userForm )
    }
    
  return (
    <div>
        <h1>Formularios</h1>
        <div className='user-info'>
            { user.bio && user.bio.length > 1 &&
                (
                <div>
                    <p>{user.nombre} {user.apellido}</p>
                    <p>{user.bio}</p>
                </div>
                )
            }
        </div>

        <form 
            className='form-container'
            onSubmit={e => getForm(e)}
            >
            <input type="text" placeholder="Nombre" name='nombre' />
            <input type="text" placeholder="Apellido" name='apellido' />
            <select name='genero'>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
            </select>
            <textarea placeholder='Biografía' name='bio'></textarea>
            <input id='button' type="submit" value="Enviar"/>
        </form>

    </div>
  )
}
