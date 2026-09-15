import express from "express";

const app = express();

app.use("/posts", (req, res, next) => {
    console.log("middle wares");
    next()
})

app.get("/posts/123",
    [
        (req, res, next) => {
            console.log("handler 1");
            next()
        },
        (req, res, next) => {
            console.log("handler 2");
            next()
        },
        (req, res, next) => {
            console.log("handler 3");
            next()
        }
    ],
    (req, res, next) => {
        console.log("handler 4");
        res.send("Req. ended")
    }


)

app.listen(5500, () => {
    console.log("App is running on port 5500");
});