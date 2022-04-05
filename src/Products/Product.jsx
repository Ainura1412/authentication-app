import { useState } from 'react'
function Product({ id, data }) {
    console.log(data.img)
    const [qqt, setQtt] = useState(0)
    return (
        <>
            image
            <div>
                <h2>{data.name}</h2>
                <img src={data.img} width="150px" />
                <h3>{data.price}</h3>
                <button onClick={() => setQtt(prev => prev + 1)}>+</button>
                <span>{qqt}</span>
                <button onClick={() => setQtt(prev => prev + 1)}>-</button>
                <button>Add To Card</button>
            </div>
        </>

    )
}
export default Product