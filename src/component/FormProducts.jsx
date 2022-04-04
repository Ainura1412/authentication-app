import { useState, useContext } from 'react'
import { FirestoreContext } from '../context/GeneralFireStore'
function FormProducts() {
    const { addProduct } = useContext(FirestoreContext)
    const [newProduct, setNewProduct] = useState({ image: "", name: "", price: "" })
    return (
        <>
            <input onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} placeholder="product Name" />
            <input onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} placeholder="price" />
            <input onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} placeholder="add the linke image" />
            <button onClick={() => addProduct(newProduct)}>Add Product</button>
        </>
    )
}

export default FormProducts