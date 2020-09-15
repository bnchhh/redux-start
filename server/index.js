const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static("public"));

const dataPath = path.resolve(__dirname, "./public/items.json");

app.get("/products", (req, res) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });
});

app.post("/products", async (req, res) => {
  try {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      const productsParsed = JSON.parse(data);
      productsParsed.products.push(req.body);
      fs.writeFile(dataPath, JSON.stringify(productsParsed), (err) => {
        if (err) {
          throw err;
        }
      });
    });
    
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`App has been started on port ${PORT}...`);
    });
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}

start();
