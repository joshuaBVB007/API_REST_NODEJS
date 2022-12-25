import express from "express";
import { connection } from "../src/db_connection.js";
var app = express();


app.get('/', (req, res) => {
      connection.query("SELECT name FROM COUNTRY limit 1", function (err, result, fields) {
          if (!err){ 
            res.json(result); 
            console.log("Query succesfully");
          } 
          else{ 
            console.log(err);
          }
      });
});

app.get('/country/:nombre', (req, res) => {
  const nombre_pais=req.params.nombre;
      connection.query(`SELECT * FROM COUNTRY where Name='${nombre_pais}'`, function (err, result, fields) {
        if (!err){ 
          res.json(result); 
          console.log("Query succesfully");
        } 
        else{ 
          console.log(err);
        }
    });
});

// select one city bt ID
app.get("/cities/:Id",(req,res)=>{
      const id_ciudad=req.params.Id;
      connection.query(`SELECT * FROM CITY where ID=${id_ciudad}`, function (err, result, fields) {
        if (!err){ 
          res.json(result); 
          console.log("Query succesfully");
        } 
        else{ 
          console.log(err);
        }
    });
})




app.listen(9000);
console.log("go to url localhost:9000")
