const express = require("express");

const projectRouter = require("./projects/projects-router");

const server = express();

server.use("/api", projectRouter);

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Server Up" });
});

module.exports = server;
