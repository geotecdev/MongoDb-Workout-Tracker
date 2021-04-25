const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const router = require("./routes");

const PORT = process.env.PORT || 3001

const app = express();
app.use(morgan("dev"));
app.use(express.urlenconded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//mongose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout" {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//routes


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
});