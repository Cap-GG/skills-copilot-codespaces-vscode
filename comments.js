// Create web server
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let comments = [
  { id: 1, username: 'alice', comment: 'I love this article!' },
  { id: 2, username: 'bob', comment: 'Great post!' },
  { id: 3, username: 'charlie', comment: 'Nice job!' }
];