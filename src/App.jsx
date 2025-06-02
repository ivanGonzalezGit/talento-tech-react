import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Carrito from './components/Carrito';
import MostrarCarrito from './components/MostrarCarrito';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={ <Carrito /> } />
        <Route path="/carrito" element={ <MostrarCarrito/> } />
      </Routes>
      <Footer />

    </>
  )
}

export default App;
