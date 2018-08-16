import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import http from 'http';
import https from 'https';
import schema from './schema';

const app = express();
const port = 3002;

const options = {
  host: 'http://localhost',
  port: 3001,
  path: '/todos',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8'
  }
};

app.use('/graphql', cors(), graphqlHTTP(() => {
  return {
    schema: schema,
    graphiql: true,
    pretty: true
  };
}));

app.listen(port, () => {
  console.log('\nServer started at http://localhost:' + port + '\n');
});

function getJSON(options, onResult) {
  console.log('Call: getJSON');

  let port = options.port == 443 ? https : http;
  
  let req = port.request(options, (res) => {
    let output = '';
    console.log('Status: ' + options.host + ':' + res.statusCode);
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
      output += chunk;
    });

    res.on('end', () => {
      let obj = JSON.parse(output);
      onResult(res.statusCode, obj);
    });
  });

  req.on('error', (err) => {
    console.log('ErrorMessage: ' + err.message);
  });

  req.end();
};



// app.get('/', (req, res) => {
//   res.redirect('/todos');
// });

// app.get('/todos', (req, res) => {
//   getJSON(options, (statusCode, result) => {
//     console.log('Result: (' + statusCode + ')' + JSON.stringify(result));
//     res.statusCode = statusCode;
//     res.send(result);
//   });
// });
