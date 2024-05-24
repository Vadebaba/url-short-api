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
{/*app.use(
    cors({
    origin: "http://localhost:3000",
    credentials: true,
})
);*/}


app.use(cors({
    origin: 'https://urlshtnr.vercel.app/', // use your actual domain name (or localhost), using * is not recommended
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))




app.use("/api/", shortUrl);


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});