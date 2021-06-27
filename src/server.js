var express = require('express');
var app = express();
var con= require('./db_connection');

//app.use(express.json()) // for parsing application/json

const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json

app.get("/", function (req, res){
    console.log("SELECT");
    con.query("SELECT * FROM frutas", function (err, result, fields) {
        if (!err){ res.json(result); console.log("Query succesfully");} 
        else{ console.log(err);}
    });
});

app.get("/:id",function(req,res){
  console.log("SELECT con ID");
  const { id }=req.params;
  var sql = "select * from frutas WHERE ID_fruit = ?";
  con.query(sql,[id],(err, result) => {
    if (!err){
        res.json(result[0]);
    }
    console.log(result.affectedRows + " record(s) updated");
  });
});

app.post("/",function(req,res){
  const { id,nombre }=req.body;
  var sql = "insert into frutas values (?,?)";
  con.query(sql,[id,nombre],(err, result) => {
    if (err) throw err;
    console.log("1 record inserted");
  });
});


app.listen(9000);
