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


## Front End Part
- keep the backend folder up and running
- start a project with npx create react app
- install tailwindCSS
- Configure routing thru react router dom - {BrowserRouter, Routes, Route}
- Make 3 pages - Home, SearchPage, EditPage
- Make NavBar, link to homePage
- get the products from the getProducts URL using axios and useEffect
- create a Loading and Products state variable
- Create a Prodcut component and pass all the products from HomePage to Products component
- Display all the products and style the components
- create Edit and Delete button
- make a create a product button on HomePage and link it to Create page
- on Create Page - create a form, capture the data and send the data to backend using axios 
- give validations on the form
- implement react-toastify
- make the edit page URL for eact product
- make the edit page, use axios.post method and using onChange={(e) => {...product, propert: e.target.value}} update the product.
- Delete the product using axios.delete. Can use react sweet alert.





