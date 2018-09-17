const path=require('path')
const express=require('express')
const publicPath=path.join(__dirname,'../public')
const port=3000||process.env.PORT;
const app=express()
app.use(express.static(publicPath))
app.get('/',(req,res)=>{
    res.send('hello');
})
app.listen(port,()=>{
    console.log(`app is running at port ${port}`);
})