const path= require('path');
const express= require('express');
const dotenv= require('dotenv');
const cors= require('cors');
const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'});

connectDB();

const app= express();


app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/stores', require('./routes/stores'));

app.get('/api/v1/stores', (req,res) =>{
    res.send('Hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
     console.log('Sever running in ${process.env.NODE_ENV} mode on port ${PORT}')
);
