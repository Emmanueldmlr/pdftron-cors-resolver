const HTMLProxyServer = require('@pdftron/webviewer-html-proxy-server');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const PORT = process.env.PORT || 3000;
const NODE_PORT = process.env.REACT_APP_NODE_PORT || 3100;
const REACT_HOST = process.env.REACT_APP_HOST || 'localhost';

const host = "https://mosaiq.herokuapp.com/";
const port = process.env.PORT || 3000;

const OPTIONS = {
  SERVER_ROOT: `${host}`,
  PORT: port,
  CORS_OPTIONS: { origin: `${host}:${PORT}`, credentials: true },
  ALLOW_HTTP_PROXY: true,
};

HTMLProxyServer.createServer(OPTIONS);
