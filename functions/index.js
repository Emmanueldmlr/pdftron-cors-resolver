const functions = require("firebase-functions");
const HTMLProxyServer = require('@drebakare/webviewer-html-proxy-server');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const host = "localhost";
const port = 9000;


const whitelist = [
  "http://localhost:3000",
  "https://mosaiqlabsdemo.netlify.app",
  
];

const OPTIONS = {
  SERVER_ROOT: host,
  PORT: port,
  CORS_OPTIONS: { origin: whitelist, credentials: true },
  COOKIE_SETTING: { sameSite: 'none', secure: true },
  ALLOW_HTTP_PROXY: false,
};

exports.app = functions.https.onRequest(HTMLProxyServer.createServer(OPTIONS));



