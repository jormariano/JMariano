import { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'

const CartItem = ({item, cantidad}) => {

  const {eliminarProducto} = useContext(CarritoContext);
  
  return (
    <div>
        
        <h3>{item.nombre}</h3>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: {item.preciousd}</p>
        <button onClick={ () => eliminarProducto(item.id)}>Eliminar Producto</button>
        <hr/>

    </div>
  )
}

export default CartItem