const html = `
<html maaa=a>
  <head>
    <style>
      body div #myid{
        width: 100px;
        backgroung: #fff;
      }
      body div img{
        width: 30px;
        backgroung: #fff111;
      }
    </style>
  </head>
  <body>
    <div>
      <img id="myid" />
      <img />
    </div>
  </body>
</html>
`

const http = require('http');
const server = http.createServer((req, res) => {
  console.log("request received");
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  console.log(res)
  res.end(html);
});

server.listen(8088);