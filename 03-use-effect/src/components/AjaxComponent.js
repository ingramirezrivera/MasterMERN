import React, { useEffect, useState } from 'react'
 
export const AjaxComponent = () => {

const [users, setUsers] = useState([])
const [loading, setLoading] = useState(true)
const [errors, setErrors] =useState("")

// const getStaticUsers = () => {
//     setUsers([
//         {
//             "id": 1,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//             },
//             {
//             "id": 2,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//             },
//             {
//             "id": 3,
//             "email": "tobias.funke@reqres.in",
//             "first_name": "Tobias",
//             "last_name": "Funke",
//             "avatar": "https://reqres.in/img/faces/9-image.jpg"
//             }
//     ])
// }

// const getAjaxUsers = () => {
//     fetch("https://reqres.in/api/users?page=1")
//     .then(response => response.json())
//     .then(
//         result => {
//             setUsers(result.data)
//             console.log("old", users)
//          },
//         error => {
//             console.log(error)

//         }
//     )
// }

// useEffect(() => {
//     getAjaxUsers();
// }, [])


const getAjaxUsersAW = async() => {
    setTimeout(async() => {
        try{
            const request = await fetch("https://reqres.in/api/users?page=2");
        const {data} = await request.json();
    
        setUsers(data)
        setLoading(false)
        console.log("new", data)
        } catch(error){
            console.log("este es el error", error.message)
            setErrors(error.message)

        }


        
    }, 2000)
   
}

useEffect(() => {
    getAjaxUsersAW()
}, [])


    if(errors !== ""){
        return(
            //Cuando pasa algun error
            <div className='loading'>
                Error: {errors}
            </div>
        )

    }else if(loading === true){
        return (
            //Cuando se esta cargando la pagina
            <div className='loading'>
                Loading data...
            </div>
        )
    }else if(loading === false && errors === ""){
            //Cuando todo ha ido bien
        return (
            <div>
                <hr />
                <h2>Listado de usuarios Ajax Component</h2>
                <ol>
                    {
                        users.map(user => {
                            
                            return (
                                
                                <li key={user.id}>
                                    <img  src={user.avatar} width="60" />
                                    {user.first_name} {user.last_name}
                                </li>
                            
                            )
                            
                        } )
                    }
                </ol>
                <hr />
            </div>
        )

    }
    
    



}
