//creamos una variable con la conexion a mysql
var mysql = require('mysql');
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
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root1994",
  database:"productos"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");   
});

module.exports=con;

/*SELECT MYSQL

con.query("SELECT * FROM customers", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});
*/

/*UPDATE MYSQL

var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
*/


/*DELETE MYSQL

var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
*/

/*CREATE TABLE

con.query("CREATE DATABASE productos", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  }); 
*/

/*INSERT MYSQL
var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
*/
