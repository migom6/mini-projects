const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const config = require('./config');
mongoose.connect(config.DB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}, (err) => {
  if (err) {
    console.log(err)
  }
  else {
    console.log("DB connected")
  }

})
app.use(cors());
app.use(express.json());

app.use("/api/user", require("./routes/auth"));

app.listen(config.PORT, () => {
  console.log(`Server running at ${config.PORT}`);
});
