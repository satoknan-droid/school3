import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});

const PORT = 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port 8080");
});
