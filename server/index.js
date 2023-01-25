const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const { default: mongoose, Schema } = require('mongoose');

dotenv.config()

const productSchema = new Schema(
    {
        image:{type:String,required:true},
        category:{type:String,required:true},
        name:{type:String,required:true},
        price:{type:Number,required:true},
    },
    {timestamps:true}
)

const app = express();
const Product = mongoose.model("product", productSchema)

app.use(cors());
app.use(bodyParser.json());

//get all
app.get("/", (req, res) => {
    Product.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            res.status(404).json({message:err})
        }
    })
})

//Get by id
app.get("/:id", (req, res) => {
    const {id}=req.params
    Product.findById(id,(err,doc)=>{
        if(!err){
           if(doc){
            res.send(doc)

           }else{
            res.status(404).json({message:"NOT FOUND"})
           }
        }else{
            res.status(500).json({message:err})
        }
    })
})

//Delete
app.delete("/:id", (req, res) => {
    const {id}=req.params
    Product.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("Deleted data")
            
        }else{
            res.status(404).json({message:err})
        }
    })
})

//add
app.post('/', (req, res) => {
    const product=new Product({
        image:req.body.image,
        category:req.body.category,
        name:req.body.name,
        price:req.body.price,
    })
    product.save()
    res.send({message:"User Created"})
})

const PORT=process.env.PORT
const url=process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
mongoose.set('strictQuery', true);

mongoose.connect(url,(err)=>{
    if(!err){
    console.log("DB connect");
        app.listen(PORT,()=>{
            console.log("Server start");
        })
    }
})