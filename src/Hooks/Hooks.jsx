import { useContador } from "./useContador"
import { useEffect } from "react";

const Hooks = () => {

    const { contador, incrementar, decrementar, agregarCarrito } = useContador(1, 5);

    useEffect( () => {
        document.title = contador ? `Contador: ${contador}` : 'JMariano';

    }, [contador]);

    return (
        <>
            <h2>Contador</h2>
            <button onClick={decrementar}>Restar</button>
            <strong> {contador} </strong>
            <button onClick={incrementar}>Sumar</button>
            <br />
            <button onClick={agregarCarrito}>Agregar al carrito</button>
        </>
    )
}

export default Hooks