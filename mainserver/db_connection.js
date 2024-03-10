const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const URL = "mongodb+srv://upcycler03:VNIT9567@cluster0.gihrw0t.mongodb.net/?retryWrites=true&w=majority";

try {
    mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    db.once("open", () => {
        console.log("Connected to Database");
    });
} catch (error) {
    console.error("Error while connecting to the database:", error);
}