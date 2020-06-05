import express from "express";

import config from "./config";

import apiRouter from "./api";

const server = express();

server.set("view engine", "ejs");

server.get("/", (req, res) => {
  res.render("index.ejs", { content: "HEllo" });
});

server.use("/api", apiRouter);
server.use(express.static("public"));

server.listen(config.port, config.hostname, () => {
  console.log(`Server listening on http://${config.hostname}:${config.port}`);
});
