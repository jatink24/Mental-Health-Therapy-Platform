const connectToMongo = require('./db');
const express = require('express');
connectToMongo();
const app = express();
const port = 27017


app.use('/api/auth',require('./routes/auth'))

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})

