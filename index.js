//name main file as index.js always
 const http = require("http");
 const express = require("express");

 const app = express();

 app.get("/", (req, res) => {
    return res.send(`"Hello from home page"`);
 });

 app.get("/about", (req, res) => {
    return res.send(`Hello ${req.query.myname}`);
 });

//  const myServer = http.createServer(app); //callback function, which is the user ip address of the client 

 //we require a port to run a server 

 app.listen(8000, () => console.log("server started"));