import mysql from "mysql"

export var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database:"world"
});

connection.connect(function(err) {
  if (err){
    console.log("Ha fallado la conexion:");
  } 
  console.log("Connected!"); 
});
