import axios from "axios";
import ReactDOMServer from "react-dom/server";
import React from "react";
import config from "./config";
import App from "./src/components/App";

const serverRender = () =>
  axios
    .get(`${config.serverUrl}/api/contests`)
    .then((res) => {
      console.log("####:", res);

      return ReactDOMServer.renderToString(
        <App initData={res.data.contests} />
      );
    })
    .catch((err) => console.log(err));

export default serverRender;
