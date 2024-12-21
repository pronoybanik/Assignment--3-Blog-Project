import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from './routes';
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'welcome to the blog server 5000',
  });
});

export default app;
