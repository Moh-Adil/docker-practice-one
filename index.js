import express from 'express';
import db from './db.js';

const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  const stmt = db.prepare("SELECT * FROM users");
  const users = stmt.all();
  res.json(users);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});