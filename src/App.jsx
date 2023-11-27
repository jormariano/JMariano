import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import Inicio from './componentes/Inicio/Inicio'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Experiencia from './componentes/Experiencia/Experiencia'
import Blog from './componentes/Blog/Blog'
import ContactForm from './componentes/ContactForm/ContactForm'
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
        <CarritoProvider>
          <NavBar />
          <div className='background-img'>
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/list' element={<ItemListContainer />} />
              <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
              <Route path='/item/:idItem' element={<ItemDetailContainer />} />
              <Route path='/experiencia' element={<Experiencia />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/contac' element={<ContactForm />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={< CheckOut />} />
              <Route path='/iniciarsesion' element={<IniciarSesion />} />
              <Route path='*' element={<div className='en-construccion'><h2>Este sitio no existe. Vuelve al</h2> <Link to='/'><h2>Inicio</h2></Link></div>} />
            </Routes>
            <Footer />
          </div>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App