const protocol = 'http:',
  host = 'localhost:3000';

const PROXY_CONFIG = {
  "/api/": {
    "target": `${protocol}//${host}`,
    "secure": false,
    "logLevel": "debug",
    "bypass": function (req, res) {
      req.headers["origin"] = this.target;
      req.headers["host"] = host;
    },
  },
  "/socket.io/": {
    "target": `${protocol}//${host}`,
    "secure": false,
    "ws": true,
    "logLevel": "debug",
    "bypass": function (req, res) {
      req.headers["origin"] = this.target;
      req.headers["host"] = host;
    },
  },
};

module.exports = PROXY_CONFIG;
