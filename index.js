'use strict';
const express = require('express');
const app = express();

const port = 8001;

function rqsthndl(req,res){
	res.end('hello ${process.platform}');
}

var server = http.createServer(rqsthndl);

app.listen(port,()=>{
	console.log(`server started at port ${port}`)
})