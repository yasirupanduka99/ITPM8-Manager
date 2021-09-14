
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routs
const postRoutes = require('./routes/costing');

//app middlewear
app.use(bodyParser.json());
app.use(cors());

//route middlewear
app.use(postRoutes);


const PORT  = 8000;
const DB_URL = 'mongodb+srv://delight8m:m812345@delight8cluster.ociug.mongodb.net/DelightM8_DB?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB Connected');
})
.catch((err) => console.log('DB Connection Error',err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});