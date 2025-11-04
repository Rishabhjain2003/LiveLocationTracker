const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer(app);
const io = socketIo(server);

// Fix: Use 'use' instead of 'set' for static files
app.use(express.static(path.join(__dirname, "public")));

// Set view engine to ejs (assuming 'views/index.ejs' exists)
app.set("view engine", "ejs");

io.on("connection", function(socket) {
    console.log("A user connected:", socket.id);

    socket.on("send-location", function(location) {
        // Fix: use location instead of undefined 'data'
        io.emit("recieve-location", { id: socket.id, ...location });
    });

    socket.on("disconnect", function() {
        console.log("User disconnected:", socket.id);
        io.emit("user-disconnected", socket.id);
    });
});

// Optional: Serve index.ejs for root URL
app.get("/", function(req, res) {
    res.render("index");
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
