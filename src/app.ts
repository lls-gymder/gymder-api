import express, { Request, Response } from 'express';


const app = express();

app.use(express.json());

// app.use(router);

app.get('/', (req: Request, res: Response) => (res.send('this is working somehow')));

export default app;