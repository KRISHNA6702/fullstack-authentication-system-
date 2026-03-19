import express from "express";
const app = express();

import path from "path";
import { fileURLToPath } from "url";

import userModel from "./models/user.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import Bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/create", async (req, res) => {
    let { username, email, password, age } = req.body;

    Bcrypt.genSalt(10, (err, salt) => {
        Bcrypt.hash(password, salt, async (err, hash) => {

            let createduser = await userModel.create({
                username,
                email,
                password: hash,
                age
            });

            let token = jwt.sign({email}, "secretkey");
            res.cookie("token", token);
            
            res.send(createduser);

        });
    });
});


app.get("/login", (req,res) => {
    res.render("login");

})

app.get("/logout", (req,res) => {
    res.cookie("token", "");
    res.redirect("/");
});

app.post("/login", async (req,res) => {
    let user =  await userModel.find({email : req.body.email});
    if(!user) return res.send("something went wrong!");

    Bcrypt.compare(req.body.password, user.password, function(err,result){
        if(result){
             res.send("logged in");
             let token = jwt.sign({email : user.email}, "secretkey");
             res.cookie("token", token);
        } else {
            res.send("something went wrong!");
        }
    });
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
