/* global ap  */
var express = require("express");
var mysql = require('mysql');
var bodyParser = require('body-parser');

const exec = require('child_process').exec;

var app = express();

// Database

var connection = mysql.createConnection({
    host     : '54.187.75.9',
  user     : 'sfuser',
  password : 'salesforce',
  database : 'MeshliumDB',
  port:'3306',
    multipleStatements:true
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Config
app.use(express.static(__dirname));

/*
var myscope = this;
myscope.localItems = {};
*/

app.set('views', __dirname);
app.set('view engine', 'jade');

var child = exec('gulp',
  function(error, stdout, stderr){
    //console.log('stdout:', stdout);
    //console.log('stderr:', stderr);
    if (error !== null) {
      console.log('exec error: ',error);
    }
});

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);


var call = function(res, rows){
  console.log("--> call method -->", rows);  
  res.render('landing', function(err, html) {
    if(err){
      console.log("--> renderinf index -->",err);  
    }
    else{
     // console.log('Warning', rows, app, res);
      var warning = JSON.stringify(rows);
      //console.log('Warning', warning);
      var temp = "<script type = 'text/javascript'>"+ "window.localStorage.jsonData = " + warning+" ;jsonData = " + warning + "; </script>";
      /*var pos = html.indexOf('<script>');
      var len = html.length;
      var newhtml = html.substr(0, pos) + temp + html.substr(pos, len);*/
      //console.log(html.indexOf('<script>'));
      res.send( temp + html);  
    }
  });
}

/*
app.get('/', function (req, res) {
	res.send("add /home")
});
*/

app.get('/', function (req, res) {
	//console.log("res:", res);
    connection.query('select sensor from meshliumdb.last_data;', function(err, rows) {
		console.log("err query ",err);
        app.locals.ap = rows;
        res.locals.ap = rows;
	    call(res, rows);
    });
	console.log('Sent: home');
	

});


app.get('/details', function (req, res) {
	
        connection.query(' select * from location;select * from sub_location where location_id="1";select * from sensor_data where sub_location_id="1";', function(err, rows) {
		console.log("err query ",err);
        app.locals.ap = rows;
        res.locals.ap = rows;
   res.render('details', function(err, html) {
    if(err){
      console.log("--> renderinf index -->",err);  
    }
    else{
     // console.log('Warning', rows, app, res);
      var warning = JSON.stringify(rows);
      //console.log('Warning', warning);
      var temp = "<script type = 'text/javascript'>"+ "window.localStorage.jsonData = " + warning+" ;jsonData = " + warning + "; </script>";
      /*var pos = html.indexOf('<script>');
      var len = html.length;
      var newhtml = html.substr(0, pos) + temp + html.substr(pos, len);*/
      //console.log(html.indexOf('<script>'));
      res.send( temp + html);  
    }
  });
    });
    
 
    
 /* //res.send('Ecomm API is running');
   res.sendFile(__dirname + '/details.html', function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent: test');
    }
  })*/;
  
});


// Launch server


app.listen(9006);
