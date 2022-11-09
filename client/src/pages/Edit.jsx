import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'

const Edit = () => {

    // GET PATH VARIABLE - params to show ID
    const {product_id} = useParams()
    const navigate = useNavigate()

    
    // DEFINE STATE
    // STATE name must match the key names in our schema(model)
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [checkbox, setCheckbox] = useState(false)

// useEffect
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${ product_id}`)
        .then(res => {
            console.log(res.data)
            // WE NEED TO PULL THESE KEYS OUT OF THE OBJECT AND REMEMBER THEM IN STATE
            // setState will prepopulate our form
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
            setCheckbox(res.data.checkbox)
        })
        .catch(errors => console.log(errors))


    }, [])

// UPDATE PRODUCT
    const updateProduct = (e) => {
        e.preventDefault()
        //CREATE BODY TO SEND OVER TO API
        let updatedBody ={
            "title": title,
            "price": price,
            "description": description,
            "checkbox": checkbox
        }
    
//MAKE AXIOS REQUEST TO API 
    axios.put(`http://localhost:8000/api/products/${ product_id}` , updatedBody)
    .then(res => {
        // to clear the form when you succesfully create something
        console.log(res.data)
        // navigate("/product") navigates to dashboard 
        navigate(`/products/${product_id}`) //REDIRECT TO DETAILS/ONE PRODUCT
    })
    .catch(errors => console.log(errors))
    }

    return (
        <fieldset>
            <h1>Edit Product</h1>
            <form onSubmit={updateProduct}>
            {/* value={} makes sure it clears out following our succesful creating  */}
            <p>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </p>
            <p>
                Price:
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            </p>
            <p>
                Description:
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </p>
            <p>
                Checkbox:
                <input type="checkbox" checked={checkbox} onChange={(e) => setCheckbox(e.target.checked)} />
            </p>
            <button>Update</button>

        </form>
        </fieldset>
    )
}

export default Edit