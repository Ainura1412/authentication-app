import { createContext } from "react";
import { collection, addDoc } from 'firebase/firestore'
import * as firebaseApp from '../firebase/configFirebase'
export const FirestoreContext = createContext();

const refCollection = collection(firebaseApp.firestore, 'products')
const FirestoreProvider = ({ children }) => {
    const addProduct = async (newProduct) => {
        try {
            await addDoc(refCollection, newProduct)
        } catch (err) {
            console.log(err.message)
        }
    }
    const data = {
        addProduct: addProduct
    }
    return (
        <FirestoreContext.Provider value={data}>
            {children}
        </FirestoreContext.Provider>
    )
}
export default FirestoreProvider