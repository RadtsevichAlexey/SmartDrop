const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();
const PORT = config.get('serverPort');
const start = async () => {
    try {
        await mongoose.connect(config.get.apply("dbUrl"));
        app.listen(PORT, () => {
            console.log("Server started on port ", PORT);
        });
    } catch (error) {
        console.log(error);
    }
};

start();