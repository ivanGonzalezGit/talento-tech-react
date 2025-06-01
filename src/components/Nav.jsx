import React from 'react';  


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
                <li><a href="#" style={estiloItems}>Galería</a></li>  
                <li><a href="#" style={estiloItems}>Carrito</a></li>  
            </ul>  
        </nav>  
    );  
}  


export default Nav; 