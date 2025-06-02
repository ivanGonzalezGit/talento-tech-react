import React from 'react';  
import { Link } from 'react-router-dom';


function Nav() { 
    
    const estilo = { 
        backgroundColor: "#a569bd", 
        color: "#D9D9D9", 
        padding: "10px" 
    }

    const estiloLista ={ 
        listStyle: "none", 
        display: "flex", 
        justifyContent: "right", 
        margin: 0 
    }

    const estiloItems = { 
        color: "#D9D9D9", 
        padding: "5px",
        textDecoration: "none"
    }

    return (  
        <nav style={estilo}>  
            <ul style={estiloLista}>  
                <li><Link to="/" style={estiloItems}>Inicio</Link></li>
                <li><Link to="/carrito" style={estiloItems}>Carrito</Link></li> 
            </ul>  
        </nav>  
    );  
}  


export default Nav; 