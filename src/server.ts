import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './config/dbConfig';
import shortUrl from './routes/shortUrl';


dotenv.config();
connectDb();

const port = process.env.PORT || 4001;

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://urlshtnr.vercel.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/api/", shortUrl);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});


