import React, { useState, useEffect } from 'react';

function Gallery({ agregarAlCarrito }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => {
                setData(res);
                setLoading(false);
            })
            .catch((error) => {
              setError('Hubo un problema al cargar los productos.');
              setCargando(false);
          });
    }, []);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) return <p>{error}</p>;

    return (
        <section style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px", flexWrap: "wrap" }}>
            {data.map((product) => (
                <div key={product.id} style={{ border: "1px solid #ccc", padding: "20px", width: "200px", textAlign: "center", borderRadius: "8px" }}>
                    <img src={product.image} alt={product.title} style={{ width: "200px", height: "200px", borderRadius: "4px" }} />
                    <h3>{product.title}</h3>
                    <p>{product.price} USD</p>
                    <button
                        onClick={()=>agregarAlCarrito(product)}
                        style={{ padding: "10px 15px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                    >
                        Agregar al carrito
                    </button>
                </div>
            ))}
        </section>
    );
}

export default Gallery;

