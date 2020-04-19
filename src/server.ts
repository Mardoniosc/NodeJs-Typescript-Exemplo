import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello World' }));

app.listen(3333, () => {
  console.log('🚀️ Server start on port 3333');
});
