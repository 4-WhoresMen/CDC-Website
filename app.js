const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const {array} = require("./profilearray")
const {CompArray} = require("./companyarray")
mongoose.connect("mongodb://localhost:27017/DB", {useNewUrlParser: true, useUnifiedTopology: true});

// mongoose.set('useFindAndModify', false);

const app = express(); // defining app
const port = process.env.PORT || 3000 ;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))


app.get("/", function(req, res){
    res.render("fpage");
});

app.get("/profile/:page", function(req, res){
    //console.log(req);
    const reqtitle = _.lowerCase(req.params.page);
    //console.log(array);
    array.forEach(function(ele){
        if(ele.para === reqtitle){
            res.render("profile", {profile: ele, });
        }
    })
})
app.get("/company/:page", function(req, res){
    //console.log(req);
    const reqtitle = req.params.page;
    //console.log(CompArray);
    //console.log(reqtitle);
     //res.render("company");
        CompArray.forEach(function(ele){
          if(ele.site === reqtitle){
           console.log(ele);
              res.render("company", {company: ele, });
          }
        })
})




app.listen(port,() => {
    console.log(`listening to the port at ${port}`);
});