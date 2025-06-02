import React, { useState, useEffect } from 'react';

function MostrarCarrito()
{

    const coleccionCarrito = JSON.parse(localStorage.getItem('miCarrito'));
    const [carrito, setCarrito] = useState(coleccionCarrito);

    function quitarItemCarrito(id) {
        setCarrito(prevCarrito => prevCarrito.filter(producto => producto.id !== id));
        localStorage.setItem('miCarrito', JSON.stringify(carrito));
    }

    function vaciarCarrito() {
        setCarrito([]);
        localStorage.setItem('miCarrito', JSON.stringify(carrito));
    }

    if (carrito.length === 0) {
        return (
            <div>
                <p>El carrito está vacío</p>
                <div style={{ padding: "20px" }}>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <button onClick={() => vaciarCarrito()}>
                    Vaciar Carrito
                </button>
                <ul>
                    {carrito.map(item => (
                        <li key={item.id}>
                            {item.title} - ${item.price} 
                            <button onClick={() => quitarItemCarrito(item.id)}>
                                Quitar producto
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
    )
    }
}

export default MostrarCarrito;