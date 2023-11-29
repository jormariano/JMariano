import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import Inicio from './componentes/Inicio/Inicio'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Portfolio from './componentes/Portfolio/Portfolio'
import Blog from './componentes/Blog/Blog'
import Contact from './componentes/Contact/Contact'
import Cart from './componentes/Cart/Cart'
import IniciarSesion from './componentes/IniciarSesion/IniciarSesion'
import CheckOut from './componentes/CheckOut/CheckOut'
import Footer from './componentes/Footer/Footer'
import { CarritoProvider } from './Context/CarritoContext'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <div className='background-img'>
        <CarritoProvider>
          <NavBar />
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/list' element={<ItemListContainer />} />
              <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
              <Route path='/item/:idItem' element={<ItemDetailContainer />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/contac' element={<Contact />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={< CheckOut />} />
              <Route path='/iniciarsesion' element={<IniciarSesion />} />
              <Route path='*' element={<div className='en-construccion'><h2>Este sitio no existe. Vuelve al</h2> <Link to='/'><h2>Inicio</h2></Link></div>} />
            </Routes>
            <Footer />
        </CarritoProvider>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App