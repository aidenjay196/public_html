const http = require('http');
const https = require('https');

const API_KEY = 'L43CYGG3L3BSRBGFQKH2DETVL';
const LOCATION = '25 Alumni Dr Dover, NH 03820';
const UNIT_GROUP = 'us';
const CONTENT_TYPE = 'json';

http.createServer((req, res) => {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(LOCATION)}?unitGroup=${UNIT_GROUP}&contentType=${CONTENT_TYPE}&key=${API_KEY}`;
  
  https.get(url, (apiRes) => {
    let data = '';

    apiRes.on('data', (chunk) => {
      data += chunk;
    });

    apiRes.on('end', () => {
      if (apiRes.statusCode === 200) {
        try {
          const jsonData = JSON.parse(data);
          const days = jsonData.days;

          let tableRows = days.map(day => {
            return `<tr><td>${day.datetime}</td><td>${day.tempmax}</td><td>${day.tempmin}</td><td>${day.precip}</td></tr>`;
          }).join('');

          const htmlResponse = `
            <html>
            <head><title>Weather Data</title></head>
            <body>
              <h1>Weather Data for ${LOCATION}</h1>
              <table border="1">
                <tr>
                  <th>Date</th><th>Max Temp</th><th>Min Temp</th><th>Precipitation</th>
                </tr>
                ${tableRows}
              </table>
            </body>
            </html>`;

          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(htmlResponse);

        } catch (error) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.end('Error parsing response data');
        }
      } else {
        res.writeHead(apiRes.statusCode, {'Content-Type': 'text/plain'});
        res.end(`API request failed with status ${apiRes.statusCode}`);
      }
    });

  }).on('error', (error) => {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end(`Error with request: ${error.message}`);
  });

}).listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});