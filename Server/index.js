const express = require('express')
const cors = require('cors')
const app = express()
const Product= require('./product.model')
require('./db')



app.use(express.json())
app.use(cors())

app.get('/product',async (req,res) =>{
    try{ 
        let data=await Product.find({})
        res.status(201).json({data:data})
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})

app.post('/product', async(req,res) => {
    const product = new Product(req.body)
    try{
        await product.save()
        res.status(201).json({
            status: 'Success',
            data : {
                product
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})


const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})