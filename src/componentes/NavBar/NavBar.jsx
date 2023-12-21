import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {

  const imgLogo = "../../logos/logo-01.png"

  const imgLogin = "../../img/login-01.png"

  return (

    <header>
      <Link to="/">
        <img className="img-logo" src={imgLogo} alt="logo de la empresa" />
      </Link>

      <nav>
        <ul className='un-list'>

          <li><div className="dropdown">
            <NavLink to="/list" className="nav-link">PRODUCTOS</NavLink>
            <div className="dropdown-content">
              <NavLink to="/item/1">SITIO WEB</NavLink>
              <NavLink to="/item/2">ECOMMERCE</NavLink>
            </div>
          </div></li>

          <li><NavLink to="/portfolio" className="nav-link"> PORTFOLIO </NavLink></li>

          <li><NavLink to="/conoceme" className="nav-link"> CONÓCEME </NavLink></li>

          <li><NavLink to="/contacto" className="nav-link"> CONTACTO </NavLink></li>
        </ul>
      </nav>

      <div className='imgs-logos'>
        <CartWidget />
        <NavLink to="/iniciarsesion"> <img className="img-login" src={imgLogin} alt="login" /> </NavLink>
      </div>
    </header>
  )
}

export default NavBar