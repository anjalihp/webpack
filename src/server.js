const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

app.use('/static',express.static(path.resolve(__dirname, '../dist')));

app.get('/kiwi/', function(req, res){
  const pathToHtmlFile = path.resolve(__dirname,'../dist/kiwi.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile);
//res.send('Some dummy content');
});

app.get('/hello-world/', function(req, res){
  const pathToHtmlFile = path.resolve(__dirname,'../dist/hello-world.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile);
//res.send('Some dummy content');
});



app.listen(3000, function(){
  console.log('Application is running on port 300');
});