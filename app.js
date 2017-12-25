var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	dust = require('dustjs-helpers'),
	cons = require('consolidate'),
	pg = require('pg'),
	app = express();


//DB Connect String
var connect = "postgres://gaurav:bigtobesmall@localhost/recipebookdb"


//Assign Dust Engine To .dust Files
app.engine('dust', cons.dust);

//Set Default Ext .dust
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

//Set Public  Folder
app.use(express.static(path.join(__dirname , 'public')));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

//routes  ( Not clean code )
app.get('/', function(req, res){
	res.render('index');
})

//server 
app.listen(3000, function(){
	console.log("Server Started On Port 3000");
})


	
	