
const fs = require('fs');


fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('welcome.txt has been created with content: Hello Node');
});


fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Content of welcome.txt:', data);
});
