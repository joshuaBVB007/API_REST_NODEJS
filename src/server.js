var express = require('express');
var sql= require("./db_connection.js");
const dir_name = require('../public/variables.js');
var app = express();

app.use(express.static(dir_name))

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/read',(req,res) => {
    res.end("Putilla al agua")
})

app.get('/country/:nombre', (req, res) => {
  const nombre_pais=req.params.nombre;
      sql.connection.query(`SELECT * FROM COUNTRY where Name='${nombre_pais}'`, function (err, result, fields) {
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
      sql.connection.query(`SELECT * FROM CITY where ID=${id_ciudad}`, function (err, result, fields) {
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
