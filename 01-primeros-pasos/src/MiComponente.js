import React from 'react'

export const MiComponente = () => {

    let nombre = 'Daniel';
    let web = 'canalua.com';

    let user = {
      nombre: 'Ana Maria',
      apellido: 'Tamayo',
      email: 'anita@gmail.com'
    }

  return (
    <div>
        <h2>Componente creado</h2>
        <p>Este es mi primer MiComponente</p>
        <ul>
            <li>Nombre: {nombre}</li>
            <li>Web: {web}</li>
            <li>{JSON.stringify(user)}</li>
            <h2>User</h2>
              <li>nombre: {user.nombre}</li> 
              <li>apellido: {user.apellido}</li>
              <li>email: {user.email}</li> 
            

        </ul>
        <ul>
            <li>React</li>
            <li>Angular</li>
            <li>Vue</li>
        </ul>
    </div>
  )
}
