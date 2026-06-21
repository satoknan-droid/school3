import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});

const port = process.env.PORT || 8080;

app.listen(port, "0.0.0.0");
