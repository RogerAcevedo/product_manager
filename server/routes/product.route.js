const ProductController = require("../controllers/product.controller")
const Product = require("../models/product.model")

module.exports = app => {
// CREATE
app.post("/api/products", ProductController.createProduct)


// REALL ALL
app.get("/api/products" , ProductController.allProducts)

// READ ONE
// must specify the ID of object being called
app.get("/api/products/:product_id", ProductController.oneProduct)


// UPDATE
// "app.put" WHEN UPDATING
app.put("/api/products/:product_id", ProductController.updateProduct)


// DELETE
app.delete("/api/products/:product_id" , ProductController.deleteProduct)

}


// POST TO CREATE
// GET FOR READ ALL AND ONE
// PUT & PATCH WHEN UPDATING
// DELETE when deleting
