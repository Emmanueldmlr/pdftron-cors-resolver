const HTMLProxyServer = require('@pdftron/webviewer-html-proxy-server');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const PORT = process.env.NODE_PORT || 3000;
const HOST = process.env.APP_HOST || 'localhost';

const OPTIONS = {
  SERVER_ROOT: `${HOST}`,
  PORT: PORT,
  ALLOW_HTTP_PROXY: true,
};

HTMLProxyServer.createServer(OPTIONS);
