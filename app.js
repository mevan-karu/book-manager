const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory storage for books (in a real app, you'd use a database)
let books = [];

// POST /books - Add a book to the bookstore
app.post('/books', (req, res) => {
  const { name, author } = req.body;

  // Validate required fields
  if (!name || !author) {
    return res.status(400).json({
      error: 'Both name and author are required'
    });
  }

  // Create new book with auto-generated ID
  const newBook = {
    id: uuidv4(),
    name: name.trim(),
    author: author.trim()
  };

  books.push(newBook);

  res.status(201).json({
    message: 'Book added successfully',
    book: newBook
  });
});

// GET /books - Get all books
app.get('/books', (req, res) => {
  res.json({
    message: 'Books retrieved successfully',
    count: books.length,
    books: books
  });
});

// GET /books/{id} - Get specific book by id
app.get('/books/:id', (req, res) => {
  const { id } = req.params;

  const book = books.find(book => book.id === id);

  if (!book) {
    return res.status(404).json({
      error: 'Book not found'
    });
  }

  res.json({
    message: 'Book retrieved successfully',
    book: book
  });
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Book Manager API is running',
    version: '1.0.0',
    endpoints: {
      'POST /books': 'Add a new book',
      'GET /books': 'Get all books',
      'GET /books/:id': 'Get book by ID'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!'
  });
});

// Handle 404 for undefined routes
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Book Manager API is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} for API information`);
});

module.exports = app;
