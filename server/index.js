import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js'
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.port || 5000;
const URI = 'mongodb+srv://root:BIV8lPeFNpnCxLOO@cluster0.pwi2z.mongodb.net/?retryWrites=true&w=majority'

app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(cors())

app.use('/posts', posts)

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to ')
    app.listen(PORT, () => {
      console.log('server is running on port' + PORT)
    })
  })
  .catch(err => {
    console.log(err)
  })

