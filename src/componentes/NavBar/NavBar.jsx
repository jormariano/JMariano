import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {

  const imgLogo = "../../img/logo-01.png"

  const imgLogin = "../../img/login-01.png"

  return (

    <header>
      <Link to="/">
        <img className="img-logo" src={imgLogo} alt="logo de la empresa" />
      </Link>

      <nav>
        <ul>
          <li><NavLink to="/experiencia" className="nav-link"> ¿Quién soy? </NavLink></li>

          <li><div className="dropdown">
            <button className="nav-link">Productos</button>
            <div className="dropdown-content">
              <NavLink to="/item/1">Página Web</NavLink>
              <NavLink to="/item/2">Ecommerce</NavLink>
            </div>
          </div></li>

          <li><NavLink to="/blog" className="nav-link"> Blog </NavLink></li>

          <li><NavLink to="/contac" className="nav-link"> Contacto </NavLink></li>
        </ul>
      </nav>

      <div className='imgs-logos'>
        <NavLink to="/iniciarsesion"> <img className="img-login" src={imgLogin} alt="login" /> </NavLink>
        <CartWidget />
      </div>
    </header>
  )
}

export default NavBar