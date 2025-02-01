const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  // Here you would typically save the user to a database
  res.status(201).json({ id: 1, name, email });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});
const jwt = require('jsonwebtoken');

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  // Verify the user's credentials and generate a JWT token
  const token = jwt.sign({ userId: user.id }, 'your-secret-key');
  res.json({ token });
});

app.get('/api/protected', (req, res) => {
  // Verify the JWT token and grant access to the protected route
  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.verify(token, 'your-secret-key');
  res.json({ message: 'Access granted!' });
});
const morgan = require('morgan');

app.use(morgan('combined'));

const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);
