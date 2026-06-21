import express from "express";

const app = express();

app.use(express.static("public"));

const port = process.env.PORT || 8080;

app.listen(port, "0.0.0.0");
