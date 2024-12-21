import express from 'express';
import cors from 'cors';
import 'dotenv/config';
const app = express();


// parsers
app.use(express.json());
app.use(cors());

// routes
// app.use('/api/products', BookRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'welcome to the blog server 5000'
  });
});

export default app;
