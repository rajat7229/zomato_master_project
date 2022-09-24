import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./database/connection";

dotenv.config();

const zomato = express();

zomato.use(express.json());
zomato.get('/', (req, res) => {
    res.json({
        message: "Server is running"
    });
});

const PORT = 4000;

zomato.listen(PORT, () => {
    ConnectDB()
    .then(() => {
        console.log("Server is running");
    })
    .catch((error) => {
        console.log("Server is running, but database connection failed");
        console.log(error);
    });
});
