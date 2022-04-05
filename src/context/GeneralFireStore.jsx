import { createContext, useEffect, useState } from "react";
import { collection, addDoc, getDocs } from 'firebase/firestore'
import * as firebaseApp from '../firebase/configFirebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
export const FirestoreContext = createContext();

const refCollection = collection(firebaseApp.firestore, 'products')

const FirestoreProvider = ({ children }) => {
    const [allProducts, setAllProducts] = useState([])
    //this function create my product
    const addProduct = async (newProduct, image) => {
        const refHosting = ref(firebaseApp.storage, `images/${image.name}`)
        const uploadImage = uploadBytesResumable(refHosting, image)
        uploadImage.on(
            'state_change', (snapshot) => {
                const proggress = (snapshot.bytesTransferred / snapshot.totalBytes * 100)
                console.log(`you have upload ${proggress} %`)
            }, (err) => { console.log(err.message) }, () => getDownloadURL(uploadImage.snapshot.ref).then((url) => addDoc(refCollection, { ...newProduct, img: url }))
        )
    }
    const getAllProducts = async () => {
        const productsFromFirestore = await getDocs(refCollection)
        console.log(productsFromFirestore)
        setAllProducts(productsFromFirestore.docs.map((product) => ({
            data: product.data(),
            id: product.id

        })))
    }
    useEffect(() => {
        getAllProducts()
    }, [])
    const data = {
        allProducts: allProducts,
        addProduct: addProduct

    }
    return (
        <FirestoreContext.Provider value={data}>
            {children}
        </FirestoreContext.Provider>
    )
}
export default FirestoreProvider
