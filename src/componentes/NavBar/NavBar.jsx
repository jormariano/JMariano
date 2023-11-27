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
        <ul className='un-list'>

          <li><div className="dropdown">
            <NavLink to="/list" className="nav-link">Productos</NavLink>
            <div className="dropdown-content">
              <NavLink to="/item/1">Página Web</NavLink>
              <NavLink to="/item/2">Ecommerce</NavLink>
            </div>
          </div></li>

          <li><NavLink to="/experiencia" className="nav-link"> Experiencia </NavLink></li>

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