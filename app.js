const express = require("express");
const path = require("node:path");
const router = require("./routes/index");

app = express();
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Listening on localhost port 3000");
})


