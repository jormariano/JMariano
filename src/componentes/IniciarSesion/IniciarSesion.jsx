import './IniciarSesion.css'
import { useState } from 'react'

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

                    <label htmlFor='usuario'>Usuario: </label>
                    <input type='text' id='usuario' onChange={(e) => setUsuario(e.target.value)} value={usuario} />

                    <label htmlFor='contrasenia'>Contraseña: </label>
                    <input type='text' id='contrasenia' onChange={(e) => setPass(e.target.value)} value={pass} />

                    <button>Iniciar sesión</button>

                    {usuario === 'Inteta de nuevo' && pass === 'Inteta DE NUEVO' && <div className="error">Usuario o contraseña incorrectos</div>}

                </form>
            )}

        </>
    )
}

// Olvidé mi contraseña. Recuperar
// ¿Aún no tienes cuenta? Regístrate
// No me llegó el mail de validación. Reenviar

export default IniciarSesion