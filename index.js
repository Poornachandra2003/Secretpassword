//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from  "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app= express();
const port=3002;

var userSucess= false;

app.use(bodyParser.urlencoded({ extended: true}));

function passwordCheck(req, res, next) {

    if(req.body["password"]=="Password")
    {
    userSucess=true;
    }
    next();
}

app.use(passwordCheck);

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
    console.log(__dirname);
});


app.post("/check",(req, res)=> {
    if(userSucess)
    res.sendFile(__dirname + "/secret.html");
    else
    res.sendFile(__dirname + "/index.html");
});



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
