import express from 'express'

const app = express();


// exact route match
app.get("/abc", (req, res) => {
    res.send("abc")
})

// b is optional in the route path
app.get("/ab?c", (req, res) => {
    res.send("abc ?")
})

// can have any number of Bs
app.get("/ab+c", (req, res) => {
    res.send("ab+c")
})

// can have anything in between b and c
app.get("/ab*c", (req, res) => {
    res.send("ab*c")
})


app.listen("5500", () => {
    console.log("App is running");
})