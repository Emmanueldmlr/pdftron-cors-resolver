const functions = require("firebase-functions");
const HTMLProxyServer = require('@drebakare/webviewer-html-proxy-server');
const path = require('path');


require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const host = "https://pdf-tron.herokuapp.com";
const port = process.env.PORT || 3000;

const whitelist = [
  "http://localhost:3000",
  "https://mosaiqlabsdemo.netlify.app",
  "https://sheldon-326500.ew.r.appspot.com",
];

// const runtimeOpts = {
//   timeoutSeconds: 500,
//   memory: "2GB",
// };

const OPTIONS = {
  SERVER_ROOT: host,
  PORT: 3000,
  CORS_OPTIONS: { origin: whitelist, credentials: true },
  COOKIE_SETTING: { sameSite: 'none', secure: true },
  ALLOW_HTTP_PROXY: false,
};

// exports.app = functions.runWith(runtimeOpts).https.onRequest(HTMLProxyServer.createServer(OPTIONS));


HTMLProxyServer.createServer(OPTIONS);
