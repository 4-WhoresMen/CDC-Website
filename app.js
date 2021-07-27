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
        ["CV : How important was your CV? How rigorously was it discussed? Would you advise or not advice adding things which are not completely true?", "cv_imp"],
        ["Duration of intern in weeks", "duration"],
        ["Your point of contact during your internship? (The position held by them and how involved were they)", "poc"],
        ["Main project or objective during your intern (title and short description)", "main_project"],
        ["Work culture in the company? (Times at which you work? How accessible are the resources? How encouraging are employees workers?)", "work_culture"],
        ["Were Important tasks given to you or any input you gave to your project manager which proved to be useful? (Were you given a project that would help the company and were your views about it valued ? )", "imp_task"],
        ["Anything you had to learn before the start of intern which you hadn’t before it?", "learn"],
        ["Overall CDC experience? Any advice for improving the process down the line?", "overall"]
    ]
];

app.get("/", function (req, res) {
    res.render("fpage");
});

app.get("/profile/:page", function (req, res) {
    //console.log(req);
    const reqtitle = _.lowerCase(req.params.page);
    //console.log(array);
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
            // console.log(ele);
            res.render("company", { company: ele });
        }
    });
});

app.get("/intern/:name", function (req, res) {
    const reqtitle = req.params.name;
    Reply.find({}, function(err,repliess){
        console.log(repliess);
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