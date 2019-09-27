
const express = require("express");
const getProducts = require('./getProducts');
const getProduct = require('./getProduct')

const app = express();

app.get('/api/products', getProducts);
app.get('/api/products/:id', getProduct);
app.get('/api/product/', getProduct);



console.log(getProducts)

app.listen(3030, () => console.log("Yo, it's running on port 3030"))