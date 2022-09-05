import express from "express";
import { connection } from "./db_connection.js"
var app = express();



app.get("/salida", function (req, res){
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


app.listen(9000);
console.log("Escribe en tu navegador el localhost:9000")
