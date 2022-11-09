const Product = require("../models/product.model")



// CREATE
module.exports.createProduct = (req, res) => {
    // req.body - displays ITS OUR FORM
    // .create is a mongoose command
    Product.create(req.body)
        .then(newProduct => {
            res.json(newProduct)
        })
        .catch(errors => res.json(errors))
}


// READ ALL
module.exports.allProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(errors => res.json(errors))
}

// READ ONE
module.exports.oneProduct = (req,res) => {
    Product.findOne({_id: req.params.product_id})
        .then(oneProduct => res.json(oneProduct))
        .catch(errors => res.json(errors))
}


// UPDATEs
module.exports.updateProduct = (req,res) => {
    // SECOND ARGUMENT IS req.body BECAUSE THATS THE NEWLY UPDATED OBJECT
    // 3rd argument - "new:true" we get updated object back
    // runValidators:true - MUST HAVE IN ORDER TO RUN VALIDATIONS
    Product.findByIdAndUpdate({_id: req.params.product_id}, req.body, {new:true, runValidators:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(errors => res.json(errors))
}



// DELETE
module.exports.deleteProduct = (req,res) => {
    Product.deleteOne({_id:req.params.product_id})
    .then(confirmation => res.json(confirmation))
    .catch(errors => res.json(errors))
}