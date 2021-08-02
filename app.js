const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const { array } = require("./profilearray")
const { CompArray } = require("./companyarray")

mongoose.connect("mongodb+srv://admin-abhisht:Popjohn123@cluster0.uu063.mongodb.net/ReplyDB", { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.set('useFindAndModify', false);

const app = express(); // defining app
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

const replyschema = new mongoose.Schema({
    sitename: String,
    name: String,
    roll: String,
    company: String,
    profile: String,
    questions: [String]
});

const Reply = mongoose.model("Reply", replyschema);

quesArr = [
    "sitename",
    "name",
    "roll",
    "company",
    "profile",
    question = [
        ["Why did you choose the company?", "reason"],
        ["How many rounds and what rounds?", "num_rounds"],
        ["Coding round. How many rounds and the degree of difficulty? How much expertise do you need to clear the round?", "cod_rounds"],
        ["CV : How important was your CV? Would you advise adding things which are not completely true in CV?", "cv_imp"],
        ["Duration of intern.", "duration"],
        ["Your point of contact during your internship?", "poc"],
        ["Main project or objective during your intern.", "main_project"],
        ["How was the work culture in the company?", "work_culture"],
        ["Were Important tasks given to you or any input you gave to your project manager which proved to be useful?", "imp_task"],
        ["Anything you had to learn before the start of intern?", "learn"],
        ["Overall CDC experience? Any advice for improving the process down the line?", "overall"]
    ]
];

app.get("/", function (req, res) {
    res.render("fpage");
});

app.get("/soon", function (req, res) {
    res.render("soon");
});

app.get("/profile/:page", function (req, res) {
    const reqtitle = _.lowerCase(req.params.page);
    array.forEach(function (ele) {
        if (ele.para === reqtitle) {
            res.render("profile", { profile: ele });
        }
    });
});

app.get("/company/:page", function (req, res) {
    const reqtitle = req.params.page;
    CompArray.forEach(function (ele) {
        if (ele.site === reqtitle) {
            var ExperienceArr=[];
            Reply.find({}, function(err,repliess){
                repliess.forEach(function(repl){
                    if(repl.company === ele.name){
                        ExperienceArr.push(repl); 
                    }
                });
                res.render("company", { company: ele ,experience :ExperienceArr});
            });
        }
    });
});

app.get("/intern/:name", function (req, res) {
    const reqtitle = req.params.name;
    Reply.find({}, function(err,repliess){
        repliess.forEach(function(repl){
            if(repl.sitename === reqtitle){
                res.render("intern", {intern: repl, ques: quesArr[5]});
            }
        });
    });
});

app.listen(port, () => {
    console.log(`listening to the port at ${port}`);
});