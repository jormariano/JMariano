import './IniciarSesion.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const IniciarSesion = () => {

    const [verificado, setVerificado] = useState(false);
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");

    const habilitarUsuario = (e) => {

        e.preventDefault();

        if (usuario === "Jor" && pass === "Mariano") {
            setVerificado(true);
        } else {
            setUsuario("Error, vuelve a intentarlo");
            setPass("Error, vuelve a intentarlo");
        }

    }

    const desahibilitarUsuario = () => {
        setVerificado(false);
    }

    return (
        <>
            {verificado ? (<button onClick={desahibilitarUsuario} className="loginUser closeBtn"> Cerrar sesión </button>) : (
                <form onSubmit={habilitarUsuario} className="loginUser">

                    <h3><strong>Iniciá sesión</strong></h3>
                    
                    <input type='text' placeholder="  CORREO ELECTRÓNICO *" id='usuario' onChange={(e) => setUsuario(e.target.value)} value={usuario} />

                    <input type='text' placeholder="  CONTRASEÑA *" id='contrasenia' onChange={(e) => setPass(e.target.value)} value={pass} />

                    <button>INGRESAR</button>

                    <p>Olvidé mi contraseña. <Link to="/contac" style={{ textDecoration: 'underline', color: 'inherit', fontWeight: '800'}}>Recuperar</Link></p>

                    <p>¿Aún no tienes cuenta? <Link to="/contac" style={{ textDecoration: 'underline', color: 'inherit', fontWeight: '800'}}>Regístrate</Link></p>

                    <p>No me llegó el mail de validación. <Link to="/contac" style={{ textDecoration: 'underline', color: 'inherit', fontWeight: '800'}}>Reenviar</Link></p>

                    {usuario === 'Inteta de nuevo' && pass === 'Inteta DE NUEVO' && <div className="error">Usuario o contraseña incorrectos</div>}

                </form>
            )}

        </>
    )
}

export default IniciarSesion