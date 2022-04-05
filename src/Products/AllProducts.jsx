import { useContext } from 'react'
import Product from './Product'
import { FirestoreContext } from '../context/GeneralFireStore'
function AllProducts() {
    const { allProducts } = useContext(FirestoreContext)
    return (
        <>
            <h1>this is my product</h1>
            {
                allProducts.map((product) => (
                    <Product id={product.id} data={product.data} />
                ))
            }
        </>
    )
}
export default AllProducts