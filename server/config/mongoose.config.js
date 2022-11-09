const mongoose = require("mongoose")

// LINK FROM mongoDB atlas to connect to the cloud
mongoose.connect('mongodb+srv://rogerhxh:Vendetta11@cluster0.bmeqgwc.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database', err));



    // -Mongoose is our bouncer to our database. Is what provides the structure and send its to mongodb.

    // -Mongoose config - allows us to go through mongoose to our database