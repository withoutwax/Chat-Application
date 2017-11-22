const express = require('express');
const socket = require('socket.io');
const cors = require('cors');

const app = express();
app.set("port", process.env.PORT || 3001);

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}

const server = app.listen(app.get("port"), () => {
  console.log(`Your SERVER is now running on port ${app.get("port")}. Press CTRL + C to terminate the SERVER.`);
});


io = socket(server);

io.on('connection', (socket) => {
  console.log(socket.id);
  socket.on('SEND_MESSAGE', function(data){
    console.log(data);
    io.emit('RECEIVE_MESSAGE', data);
  });

});
