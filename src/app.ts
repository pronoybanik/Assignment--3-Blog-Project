import express from 'express';
import cors from 'cors';
import router from './routes';
import NotFound from './middlewares/notFound';
import globalErrorHandler from './middlewares/globalErrorHandler';
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', router);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'welcome to the blog server 5000',
  });
});

// Global error handling
app.use(globalErrorHandler);

app.use(NotFound);

export default app;
