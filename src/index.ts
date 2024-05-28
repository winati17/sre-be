import 'dotenv/config';
import express, { Request, Response } from "express";
import siclusRouter from './api/v1/siclus/route';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json()); // Add this line to enable JSON parsing in the request body

app.use(express.static('public'));

app.use('/api/v1/siclus', siclusRouter);

app.get('/api/v1', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

