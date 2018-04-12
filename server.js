var express = require('express');
var app = express();
var path = require('path');
var server = app.listen(process.env.PORT || 8000,function(){
	console.log('listening');
});

app.use('/static',express.static(path.join(__dirname,'static')));
app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'static/index.html'));
});