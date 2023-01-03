var express = require('express');
var sql_database_connection= require("./db_connection.js");
const dir_name = require('../public/variables.js');
const fs=require('fs')
const path=require('path');
var app = express();

app.use(express.static(dir_name))

app.get('/', (req, res) => {
      res.sendFile('index.html');
});

app.get('/write',(req,res) => {
  const content = 'Some content!';
  fs.appendFile(path.join(dir_name, 'test.txt'), content, err => {
    if (err) {
      console.error(err);
    }
    res.send('OK')
  });
})

app.get('/read',(req,res) => {
  fs.readFile(path.join(dir_name, 'test.txt'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(data)
  });
})

// get access to a file and to know how many bytes it has
app.get('/size',(req,res) => {
      fs.stat(path.join(__dirname,'styles.css'),(err, stats) => {
        if (err) {
          console.error(err);
        }
        var n=stats.size;
        res.end(n.toString()+" bytes is the size of this file")
      });
})

app.get('/country/:nombre', (req, res) => {
      const nombre_pais=req.params.nombre;
      sql_database_connection.query(`SELECT * FROM COUNTRY where Name='${nombre_pais}'`, function (err, result, fields) {
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
      sql_database_connection.query(`SELECT * FROM CITY where ID=${id_ciudad}`, function (err, result, fields) {
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
