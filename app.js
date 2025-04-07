const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./src/routes/userRoutes')
require('dotenv').config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000
const DB_URI = process.env.DB_URI

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log('Conectado ao MongoDB')
        app.listen(PORT,()=>console.log(`Server rodando na porta ${PORT}`))
    })
    .catch(err=>console.error(err))

app.use('/users',userRoutes)