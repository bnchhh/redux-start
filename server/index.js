const express = require("express");

const app = express();
app.use(express.json());
app.use(express.static('public'))


const PORT = process.env.PORT || 3000;

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
