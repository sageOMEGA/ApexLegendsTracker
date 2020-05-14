const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

//Load ENV
dotenv.config({path: './config.env'});

//Create React App
const app = express();

//Dev Loging
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Profile Routes
app.use('/api/v2/profile', require('./routes/profile'));
// app.get('/api/v1/profile/:platform/:gamertag',(req, res) => {
//   console.log(req.params.platform, req.params.gamertag);
//   res.send('Testing');
// })

const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`Server Running On Port ${port}...`)
});