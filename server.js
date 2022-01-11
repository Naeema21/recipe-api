// const http = require('http');
// const app = require('./app');
// const port = 5000;
// const server = http.createServer(app);
// // // listen post number
// //  server.listen(process.env.PORT || 3000);
// server.listen(port, () => {
//      console.log("App is running on port " + port);
// });


const http = require('http');
const app = require('./app');
const port = 5000;
const server = http.createServer(app);
server.listen(port, () => {
     console.log("App is running on port " + port);
});