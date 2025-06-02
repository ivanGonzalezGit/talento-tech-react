import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';


function Carrito() {
    const [carrito, setCarrito] = useState([]);

    //utilizo useEffect para que el localStorage espere a que se cambie el carrito para actualizarse.
    useEffect(() => {
        localStorage.setItem('miCarrito', JSON.stringify(carrito));
    }, [carrito]);

    function agregarAlCarrito(item) {
        setCarrito(prevCarrito => [...prevCarrito, item]);
        localStorage.setItem('miCarrito', JSON.stringify(carrito));
    }

    return (
        <Gallery agregarAlCarrito={agregarAlCarrito}/>
    )

}

export default Carrito;