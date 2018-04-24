var express=require("express");
var words1 = ['mara', 'rios'];

var w=require("./wordfindgame");


var app= express();
app.set("view engine","jade");
app.use(express.static("public"));

app.get("/", function(req,res){
res.render("index");
});
app.get("/menu/sopa",function(req,res){

	res.render("menu/sopa");
});

app.listen(3000);
