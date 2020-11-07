(function () {
  const socket = io("http://35.157.80.184:8080");

  socket.on("connect", console.log);
  socket.on("message", console.log);
  socket.on("disconnect", console.log);
})();
