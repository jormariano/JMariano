import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    const nuevoDoc = doc(db, "productos", idItem);

    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data();
        const nuevoProducto = { id: res.id, ...data }
        setProducto(nuevoProducto);
      })
      .catch(error => console.log(error))
  }, [idItem])


  return (
    <div className='card-item-detail'>
      <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer