// useState to get info from express. useEffect to render all the info 
import {useState, useEffect} from 'react'
// DASHBOARD needs to display and retrieve all info in the database with API request
import axios from "axios"
// allows us to use links
import { Link } from 'react-router-dom'


const Dashboard = () => {
// STATE
// set [empy array] because we are gonna retrieve a list of recipe objects
    const [allProducts, setAllProducts] = useState([])
// Delete functionality to change the state of our useEffect to reflect updated page
    const [refresh, setRefresh] = useState(false)

// get information from the database
// 2 arguments - arrow fuctions & empty array
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setAllProducts(res.data))
            .catch(errors => console.log(errors))
    // CONSOLE LOG
            // .then(res => console.log(res.data))
            // .catch(errors => console.log(errors))
    }, [refresh])

//DELETE RECIPE FUNCTION
    const deleteProduct = (product_id) => {
        // console.log(product_id)
        axios.delete(`http://localhost:8000/api/products/${product_id}`)
            .then(res => setRefresh(!refresh))
            // .then(res => console.log(res.data))
            .catch(errors => console.log(errors))
    }


// HANDLER
    return (
        <fieldset>
            <h1>Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Checkbox</th>
                        <th>Actions</th>
                        <th>Created at</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        // MAPS THROUGH ALL THESE ITEMS through useEffectd
                        allProducts.map((product) => {
                            // DECONSTRUCT TO AVOID USING "product."
                            // const {_id, title, price, description, checkbox, createdAt} = product
                            return(
                                <tr key={product._id}>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    {/* TERNARY TO DISPLAY CHECKBOX ANSWSER - BOOLEANS DONT SHOW */}
                                    {(product.checkbox) ? <td>Yes</td> : <td>No</td> }
                                    <td>{product.checkbox}</td>
                                    <td>
                                        {/* view to direct us to anoter page - insert id to URL zone for Links*/}
                                        <Link to={`/products/${product._id}`} >View</Link>
                                        <Link to={`/products/edit/${product._id}`} >Edit</Link>
                                        {/* delete must have the callback arrow functionality */}
                                        <button onClick={() => deleteProduct(product._id)}>Delete</button>
                                    </td>
                                    <td>{product.createdAt}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default Dashboard