import React, { useState } from 'react';
import Gallery from './Gallery';

function MostrarCarrito({carrito, quitarItemCarrito})
{

    return (
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
    )
}


function Carrito() {
    const [carrito, setCarrito] = useState([]);

    function agregarAlCarrito(item) {
        setCarrito(prevCarrito => [...prevCarrito, item]);
    }

    function quitarItemCarrito(id) {
        setCarrito(prevCarrito => prevCarrito.filter(producto => producto.id !== id));
    }

    function vaciarCarrito() {
        setCarrito([]);
    }

    if (carrito.length === 0) {
        return (
            <div>
                <p>El carrito está vacío</p>
                <div style={{ padding: "20px" }}>

                </div>
                <Gallery agregarAlCarrito={agregarAlCarrito}/>
            </div>
        );
    } else {
        return (
            <main style={{ padding: "20px" }}>
                <h2>Carrito de Compras</h2>
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                <MostrarCarrito carrito={carrito} quitarItemCarrito={quitarItemCarrito}/>
                <Gallery agregarAlCarrito={agregarAlCarrito}/>
            </main>
        );
    }
}

export default Carrito;

