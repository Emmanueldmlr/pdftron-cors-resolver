const HTMLProxyServer = require('@drebakare/webviewer-html-proxy-server');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const host = "https://pdf-tron.herokuapp.com";
const port = process.env.PORT || 3000;


const whitelist = [
  "http://localhost:3000",
  "https://mosaiqlabsdemo.netlify.app"
];

const OPTIONS = {
  SERVER_ROOT: host,
  PORT: process.env.PORT || 8080,
  CORS_OPTIONS: { origin: whitelist, credentials: true },
  COOKIE_SETTING: { sameSite: 'none', secure: true },
  ALLOW_HTTP_PROXY: false,
};

HTMLProxyServer.createServer(OPTIONS);
