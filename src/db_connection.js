var sql_module=require("mysql")

var connection = sql_module.createConnection({
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


module.exports=connection;