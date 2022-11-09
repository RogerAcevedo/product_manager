import {useEffect, useState} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

const Details = () => {

    // DESTRUCTURE PARAMS
    // product id must match our path in the app.jsx
    const {product_id} = useParams()

    // STATE
    const [oneProduct, setOneProduct] = useState(null)

    useEffect( () => {
        // IMPORT PARAMS TO GET ID
        axios.get(`http://localhost:8000/api/products/${ product_id}`)
            .then(res => setOneProduct(res.data))
            .catch(errors => console.log(errors))
    }, [])


    return (
        <fieldset>
            <h1>One Product</h1>
            {/* TERNARY OPERATOR - checks to see if product is filled with an actual value */}
            {/* if it is it displays our information */}
            {
                (oneProduct) ?
            <>
                <h3>Title:{ oneProduct.title }</h3>
                <h3>Price: {oneProduct.price}</h3>
                <h3>Description: { oneProduct.description}</h3>
                {/* DISPLAY CHECKBOX ANWSER */}
                <h3>Owns: {(oneProduct.checkebox) ? "Yes" : "No"}</h3>
            </> : <h1>Wait for it...</h1>
            }
            

        </fieldset>
    )
}

export default Details