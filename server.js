import express from "express";
import { connection } from "./db_connection.js"
var app = express();

app.get("/", function (req, res){
    console.log("SELECT");
    connection.query("SELECT * FROM COUNTRY", function (err, result, fields) {
        if (!err){ 
          res.json(result); console.log("Query succesfully");
        } 
        else{ 
          console.log(err);
        }
    });
});

// app.get("/:id",function(req,res){
//   console.log("SELECT con ID");
//   const { id }=req.params;
//   var sql = "select * from COUNTRY WHERE NAME = ?";
//   con.query(sql,[id],(err, result) => {
//     if (!err){
//         res.json(result[0]);
//     }else{
//       console.log(err)
//     }
//   });
// });

// app.post("/",function(req,res){
//   const { id,nombre }=req.body;
//   var sql = "insert into frutas values (?,?)";
//   con.query(sql,[id,nombre],(err, result) => {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

app.listen(9000);
console.log("Escribe en tu navegador el localhost:9000")
