// file: local.js
const app = require('./server.js');
const port = 5000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});