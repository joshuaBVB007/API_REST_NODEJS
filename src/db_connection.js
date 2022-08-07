//creamos una variable con la conexion a mysql
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"yasai"
});

con.connect(function(err) {
  if (err){
    throw err;
    console.log(err);
  } 
  console.log("Connected!");   
});

module.exports=con;

//Refactoring


/*
si te resulta dar este error
Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client

ve a workbench y ejecutas el siguiente codigo
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

luego ve a tu carpeta donde esté este fichero y ejecutalo
ej: cd bd_file
    node nomfichero.js
    si te sale connected o el feedback que le hayas puesto esta todo perfecto puedes continuar
*/

