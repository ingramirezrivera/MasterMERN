
export const GuardarEnStorage = (key, element) => {

        //conseguir os elementos del local storage
        let elementos = JSON.parse(localStorage.getItem(key))
        console.log(elementos)

        //Comprobar si es un array
        if(Array.isArray(elementos)){
            //Añadir un elemento nuevo
            elementos.push(element)
        }else{
            //Crear un array con el nuevo elemento
            elementos = [element];
        }

        //Guardar el el local storager
        localStorage.setItem(key, JSON.stringify(elementos))
        //devolver el objeto guardado
        return element;
    
  
}
