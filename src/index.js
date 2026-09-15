import express from 'express'

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Node JS")
})

app.use("/", (req, res) => {
    res.send("Hello Node JS - POST")
})

app.get("/about", (req, res) => {
    res.send("About")
})
app.get("/about2", (req, res) => {
    res.send("About2")
})

app.listen("5500", () => {
    console.log("App is running");
})