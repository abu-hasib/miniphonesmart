import express from "express";
import sassMiddleware from "node-sass-middleware";
import path from "path";
import mongoose from "mongoose";

import config from "./config";
import apiRouter from "./api";

const server = express();

mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("connected");
});

server.use(
  sassMiddleware({
    src: path.join(__dirname, "sass"),
    dest: path.join(__dirname, "public"),
  })
);
server.set("view engine", "ejs");

import serverRender from "./serverRender";

server.get("/", (req, res) => {
  console.log("This is server render: ", serverRender());

  serverRender()
    .then((content) => {
      res.render("index.ejs", { content });
    })
    .catch(console.error);
});

server.use("/api", apiRouter);
server.use(express.static("public"));

server.listen(config.port, config.hostname, () => {
  console.log(`Server listening on http://${config.hostname}:${config.port}`);
});
