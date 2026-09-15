import express from "express";

const app = express();

// Exact route match
// Matches: /abc
app.get("/abc", (req, res) => {
    res.send("abc");
});

// b is optional
// Matches: /abc and /ac
app.get("/a{b}c", (req, res) => {
    res.send("abc ?");
});

// One or more Bs
// Matches: /abc, /abbc, /abbbc, /abbbbc, ...
app.get(/^\/ab+c$/, (req, res) => {
    res.send("ab+c");
});

// Anything between b and c
// Matches: /abc, /abxc, /ab123c, /abhelloc, ...
app.get(/^\/ab.*c$/, (req, res) => {
    res.send("ab*c");
});

app.listen(5500, () => {
    console.log("App is running on port 5500");
});