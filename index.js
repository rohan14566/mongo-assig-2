const express=require('express');
const app=express();
const bodyParser=require("body-parser");
const studentdataRouter=require("./routes/studentdata")

app.use(bodyParser.json());

app.use(studentdataRouter);

app.listen(5000,()=>{
    console.log('server is running')
})