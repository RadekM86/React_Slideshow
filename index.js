const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/public'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(bodyParser.urlencoded({extended: false}));

let users = [];
let admin = 0;
let user =1

io.on('connection', function(socket){
  users.push(socket.id)
  console.log('lista użytkowników ' + users)
  io.to(users[0]).emit('user', admin)
  for (let i=1;i<users.length;i++){
    io.to(users[i]).emit('user', user)
  }
  
  
  
  socket.on('slide', (slide)=>{
      io.emit('slide', slide)
    })
    socket.on('disconnect', function(socket){
      console.log(`user  disconnected`);

    });
  });
  







server.listen(4000);