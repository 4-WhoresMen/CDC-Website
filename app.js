const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

mongoose.connect("mongodb://localhost:27017/DB", {useNewUrlParser: true, useUnifiedTopology: true});

// mongoose.set('useFindAndModify', false);

const app = express(); // defining app
const port = process.env.PORT || 3000 ;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

const sdecomp = [];
const quantcomp = [];
const analyticscomp = [];
const corecomp = [];
const consultingcomp = [];
const financecomp = [];

const array = [
    sde = {
        para: "sde",
        name: "SDE",
        about: "Some large about for this sde.",
        resources: "link",
        companies: sdecomp
    },
    quant = {
        para: "quant",
        name: "Quant",
        about: "Some large about for this sde.",
        resources: "link",
        companies: quantcomp
    },
    analytics = {
        para: "analytics",
        name: "Analytics",
        about: "Some large about for this sde.",
        resources: "link",
        companies: analyticscomp
    },
    finance = {
        para: "finance",
        name: "Finance",
        about: "Some large about for this sde.",
        resources: "link",
        companies: financecomp
    },
    consulting = {
        para: "consulting",
        name: "Consulting",
        about: "Some large about for this sde.",
        resources: "link",
        companies: consultingcomp
    },
    core = {
        para: "core",
        name: "Core",
        about: "Some large about for this sde.",
        resources: "link",
        companies: corecomp
    },
]

app.get("/", function(req, res){
    res.render("fpage");
});

app.get("/profile/:page", function(req, res){
    const reqtitle = _.lowerCase(req.params.page);
    array.forEach(function(ele){
        if(ele.para === reqtitle){
            res.render("profile", {profile: ele});
        }
    })
})

app.listen(port,() => {
    console.log(`listening to the port at ${port}`);
});