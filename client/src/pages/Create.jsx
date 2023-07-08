import React, {useState} from 'react'
// IMPORT STATE TO STORE INFORMATION AND WHAT THEY'VE SELECTED
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Create = () => {

    // navigate functino to use useNavigate
    const navigate = useNavigate()

    // DEFINE STATE
    // STATE name must match the key names in our schema(model)
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [checkbox, setCheckbox] = useState(false)

    const createProduct = (e) => {
        // prevent from refreshing
        e.preventDefault()
        // CREATE A BODY OBJECT TO send information over to API
        let body ={
        "title": title,
        "price": price,
        "description": description,
        "checkbox" : checkbox
        }
        // AXIOS REQUEST to make call to our express server(API)
        // RESPOND with our BODY which is where our state was stored
        axios.post("http://localhost:8000/api/products", body)
            .then(res => {
                // to clear the form when you succesfully create something
                console.log(res.data)
                setTitle("")
                setPrice("")
                setDescription("")
                setCheckbox(false)
                navigate("/products")

            })
            .catch(errors => console.log(errors))
    }


    return (
        <fieldset>
        <h1>Create Product</h1>
        <form onSubmit={createProduct}>
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
            <button>Sumbit</button>

        </form>
        </fieldset>
    )
}

export default Create