# SoyHenry Final-Project
<p align="left">
  <img height="150" src="./client/src/media/logonavbar.png" />
</p>


__DEPLOY LINK__: __https://bsale2.vercel.app/__

## Objective:
Create an E-commerce that is able to display products based in their category, 
utilizing the provided database for its development. 
You must also implement a search function where the results must arrive already filtered to the client



## Technologies and Tools

- JavaScript 
- NodeJS 
- ExpressJS
- Sequelize ORM
- ReactJS
- CSS
- SASS
- Bootstrap

## Documentation

The front end is managed with a context api made with react-redux which uses a reducer to modify its initial state.
The initial state is arranged in 3 arrays as follows:

    { products: [],
    categories: [],
    cart:[]
    }

The “products” array stores the products that will be displayed.
The “categories” array stores the categories
The “cart” array stores the products that are added to the cart.

To make use of this store, we import the useStore() component from  src/context/store.js in our react object, and use

    const [state, dispatch] = useStore()

There are 4 actions that this reducer performs:

    * fetchProducts(dispatch):
        *Receives a dispatch, then makes the “GET all products” request to our back end API,
            and adds the Product type objects to the “products” array.

    * fetchCategories(dispatch):
        Receives a dispatch, then makes the “GET all categories” request to our back end API, 
        then adds the Category type objects to the “categories” array.

    * filterByCategories(dispatch, {value}):
        Receives a dispatch and an Integer type value. Makes the “POST filter by category” 
        request on our back end API, then puts the Product type objects whose category 
        property matched the “value”  into the “products” array

    * searchProduct(dispatch, {input}):
        Receives a dispatch and a String type value. Makes the “GET matching products” request
        to our back end API, then puts the Product type objects whose name matches the input
        into the “products” array. 










