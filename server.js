const express = require(`express`);
const cors = require(`cors`);
const app = express();
app.use(cors());
app.use(express.json());
const controller = require("./controller");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://imaldero:admin@cluster0.xgcor.mongodb.net/random?retryWrites=true&w=majority";

mongoose.connect(url).then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 3000;

app.get("/", controller.getdata);
app.post("/", controller.postdata);
app.delete("/:id", controller.deletedata);

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
