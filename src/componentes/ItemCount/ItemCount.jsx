import './ItemCount.css'
import { useState } from "react"

const ItemCount = ({ inicial, stock, funcionAgregar }) => {

    const [contador, setContador] = useState(inicial)

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }

    }

    return (
        <>
            <div className='item-count'>
                <button className='count-button' onClick={decrementar}>-</button>
                <p className='count-p'> {contador} </p>
                <button className='count-button' onClick={incrementar}>+</button>
                <br />
                <button className='count-button-add' onClick={ () => funcionAgregar(contador)}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount