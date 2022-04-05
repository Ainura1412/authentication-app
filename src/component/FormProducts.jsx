import { useState, useContext } from 'react'
import { FirestoreContext } from '../context/GeneralFireStore'
function FormProducts() {
    const { addProduct } = useContext(FirestoreContext)
    const [newProduct, setNewProduct] = useState({ name: "", price: "" })
    const [newImage, setNewImage] = useState("")

    return (
        <>
            <input onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} placeholder="product Name" />
            <input onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} placeholder="price" />
            <input type="file" onChange={(e) => setNewImage(e.target.files[0])} placeholder="add the linke image" />
            <button onClick={() => addProduct(newProduct, newImage)}>Add Product</button>
        </>
    )
}

export default FormProducts