const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    const product = [
        {
            id:"1",
            label:"product1"
        },
        {
            id:"2",
            label:"product2"
        }
    ]
    res.send(product)
})
app.get('/products/:id', (req, res) => {
  const productID = parseInt(req.params.id);
  const products = [
    { id: 1, label: "product1" },
    { id: 2, label: "product2" }
  ];

  const result = products.find(p => p.id === productID);

  if (result) {
    return res.json(result);
  } else {
    return res.status(404).send("Product not found");
  }
});

const port = 5000;
app.listen(port,()=>{
    console.log(`The server started:${port}`);
    
})