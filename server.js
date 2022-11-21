const http = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./app');


dotenv.config({ path: './config.env' });


const DB = process.env.DATABASE;
const port = process.env.PORT;

mongoose.connect(DB)
    .then(con => console.log("Connection successful"))
    .catch(err => console.log(err));


app.listen(port, (err) => {
    console.log(`App started at port ${port}`);
})