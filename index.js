const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const PORT = 3000
app.listen(PORT, (req, res)=>{
    console.log(`Server is ruuning on port ${PORT}`);
})