
var mysql      = require('mysql');


var connection = mysql.createConnection({
  host     : '54.187.75.9',
  user     : 'sfuser',
  password : 'salesforce',
  database : 'MeshliumDB',
  port:'3306',
  debug: true
});

 
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});


 
connection.query('select value from meshliumdb.last_data where sensor="US";', function(err, rows, fields) {
connection.end();
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
  });

