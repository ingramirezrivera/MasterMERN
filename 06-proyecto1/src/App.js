import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { CrearPeli } from "./components/CrearPeli";
import { Listado } from "./components/Listado";


function App() {
    const [listState, setListState] = useState([])


  return (
    <div className="layout">
    {/* CABECERA */}
    <header className="header">
       <div className="logo">
           <div className="play"></div>
       </div>
       <h1>MisPelículas</h1>
    </header>

    {/* BARRA DE NAVEGACION */}
    <nav className="nav">
        <ul>
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Películas</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">Contacto</a></li>
        </ul>
    </nav>

    {/* CONTENIDO PRINCIPAL */}
    <section className="content">
         {/* AQUI VAN LAS PELICULAS */}
        <Listado 
            listState={listState} 
            setListState={setListState}/>
    </section>
    
    {/* LATERAL */}
    <aside className="aside">
        {/* AQUI VA EL BUSCADOR */}
        <Buscador 
            listState={listState} 
            setListState={setListState}/>
        <CrearPeli 
            setListState={setListState}/>
    </aside>
    {/* PIE DE PAGINA */}
    <footer className="footer">
        &copy; Máster en React - Daniel Ramírez Rivera
    </footer>

</div>
  );
}

export default App;
