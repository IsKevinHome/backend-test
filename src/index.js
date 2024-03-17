import express from 'express';
import bodyParser from 'body-parser';
import rateLimit from 'express-rate-limit';

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Example route
app.get('/', (req, res) => {
  res.send('Hello, from express ✨✨✨');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
