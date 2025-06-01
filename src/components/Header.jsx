import React from 'react';  

function Header() {  
    const estilo = {
        backgroundColor: "#2980b9", 
        padding: "10px", 
        textAlign: "center", 
        color: "#D9D9D9" 
    }
    return (  
        <header style={estilo}>  
            <h1>Tienda Todo Baratito...</h1>  
        </header>  
    );  
} 

export default Header;