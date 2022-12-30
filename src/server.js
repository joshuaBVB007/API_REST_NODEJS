import express from "express";
import { connection } from "./db_connection.js";
import { myEvent } from "./events.js";
import path from "path";
import fs from "fs";

var app = express();
var path_of_file=path.dirname('C:\\Users\\Usuario\\Desktop\\nodejsAPI\\public\\styles.css');
//returns  C:\Users\Usuario\Desktop\nodejsAPI
app.use(express.static(path_of_file + '/public'))

// register and event
// myEvent.on('click',()=>{
//   console.log('Que pasa weones')
// })


var content=""
fs.readFile('C:\\Users\\Usuario\\Desktop\\nodejsAPI\\public\\styles.css',"utf8", (err, stats) => {
  if (err) {
    console.error(err);
  }
  content=stats;
});


app.get('/', (req, res) => {
    res.sendFile("index.html");
});

app.get('/read',(req,res) => {
    // we read the content from the file "atyles.css"
    res.end(content)
})

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
