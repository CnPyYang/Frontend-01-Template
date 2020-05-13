const net = require('net');

const ResponseParser = require('./response-parser');

class Request {
  constructor(options) {
    this.method = options.method || 'GET';
    this.host = options.host;
    this.path = options.path || '/';
    this.port = options.port || 80;
    this.body = options.body || {};
    this.headers = options.headers || {}
    if (!this.headers['Content-Type']) {
      this.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    if (this.headers['Content-Type'] === 'application/json') {
      this.bodyText = JSON.stringify(this.body)
    } else if (this.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&')
    }
    this.headers['Content-Length'] = this.bodyText.length;
  }
  toString() {
    return `${this.method} ${this.path} HTTP/1.1\r
${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}
\r
${this.bodyText}`
  }
  send(connection) {
    return new Promise((resolve,reject) => {
      if (connection) {
        connection.write(this.toString());
      } else {
        connection = net.createConnection({
          host: this.host,
          port: this.port
        }, () => {
          connection.write(this.toString());
        })
      }
      connection.on('data', (data) => {
        let responseParser = new ResponseParser();
        responseParser.receive(data.toString());
        const { statusCode, statusText, headers, body } = responseParser;
        let response = {
          statusCode,
          statusText,
          headers,
          body,
        };
        resolve(response);
        connection.end();
      });
      connection.on('error', (err) => {
        reject(err);
      });
    })
  }
}

class Response {}

void async function () {
  let request = new Request({
    method: "POST",
    host: '127.0.0.1',
    port: '8088',
    path: '/',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: {
      name: 'zjp'
    }
  })
  let response = await request.send()
  console.log(response)
}();
