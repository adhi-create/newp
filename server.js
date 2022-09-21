  const express = require('express');
  const app = express();

 app.get('/',(req,res)=>{
    res.send('hello')
 })
 const products = [
    {
        id:1,
        name :'iphone'
    },
    {
        id:2,
        name:"mi"
    }
 ]

 app.get('/products',(req,res)=>{
    res.json(products)
 })


  app.listen(process.env.PORT()=> console.log('server running...'))
