## Making a CRUP API

## To make CRUP API
- Npm init
    - Install express, nodemon as dev dependency, mongoose
    - initiate express
    - initiate connection from mongoose, refer docs
    - initiate the express server inside the mongosse function
    - Give the DB name in URL

- Initaite mongodb --dbpath c:\\data\db
- Give body parser
- Make schema for the DB collection using mongoose in Model folder
- Export the model
    - const Product = mongoose.modal("Product", productSchema)
    - module.exports = Product
- Import the Product model

## To refactor the code in MVC
- configure the dotenv file, install dotenv package
- require("dotenv").config();
- Add the Mango_DB url and Port number in .env file and export from there.
- create a routes folder for the routes
    - use const router = express.Router();
    - use router constant on all RESTapi methods
    - export the router and import the router as productRouter in the main server file.
    - const productRoute = require("./routes/product");
    - use middleware app.use("/api/products", productRouter)
    - use BodyParser and URLencoded middleware in the router file
- export the controller functions to product controller file in controller folder.
- import the controller functions to the route file

## Custom Middleware
- Making a Custom Error Middleware 
- Make a separate folder for Middlewares -> errorMiddleware
- make a NODE_ENV const in .env file
- make the error middleware
- set up asynchandler in controllers
- install cors package
- include in server.js file
- configure cors to connect to front-end


