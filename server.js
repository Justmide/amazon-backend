const cors = require('cors');
const app = require("./app")
const dotEnv = require('dotenv')
dotEnv.config()
const PORT = process.env.PORT 
// listen to a port 
app.listen(PORT, ()=>{
    console.log('Server is running on port 3000');
})
app.use
const connectToDb = require("./config/connectToDb")
connectToDb()
console.log(connectToDb);

// use cors
app.use(cors());





//http://localhost:3000/
// create a route
// app.get('/',(req, res)=>{
//     res.send('Hello World');
// });

// app.get('/users',(req, res)=>{
//     res.send('All users');
// });

// //add new products
// app.post('/products', (req, res)=>{
//     res.status(200).json({
//         message: 'Product added successfull'
//     });
// });

// get all products
// const products = [
//     {
//         id: 1,
//         name: 'Laptop'
//     },
//     {
//         id: 2,
//         name: 'Mobile'
//     },
//     {
//         id: 3,
//         name: 'Game Console'
//     }

// ];      

// app.get('/products', (req, res)=>{
//     const allProducts = products;
//     if (!allProducts) {
//         res.status(404).json({
//             message: 'No product found!'
//         })
//         return;
//     }

//     res.status(200).json({
//         status: 'Success',
//         message: 'All product Fetched',
//         products: products
//     })
// })

// get single product
// app.get('/products/:id', (req, res)=>{
//     const id = req.params.id;
//     const product = products.find(product => product.id == id);
//     if(!product){
//         res.status(404).json({
//             message: 'No product found'
//         });
//         return;
//     }
//     res.status(200).json({
//         status: 'success',
//         message: `${product.name} fetched successfully`,
//         product: product
//     });
// });

// update single products 
// app.patch('/products/:id', (req, res)=>{
//     const id = req.params.id;

//     const product = products.find(product => product.id == id);
//    if(!product){
//     res.status(404).json({
//         message: 'No products found'
//     })
//     return;
//    }
// res.status(200).json({
//     status: "Success",
//     message:`${product.name} successfully updated`,
//     product: product
// })
// })