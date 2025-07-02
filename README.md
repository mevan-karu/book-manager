# Book Manager API

A simple REST API for managing books built with Express.js.

## Features

- Add new books to the bookstore
- Retrieve all books
- Get specific books by ID
- Auto-generated unique IDs for each book

## API Endpoints

### POST /books
Add a new book to the bookstore.

**Request Body:**
```json
{
  "name": "Book Title",
  "author": "Author Name"
}
```

**Response:**
```json
{
  "message": "Book added successfully",
  "book": {
    "id": "auto-generated-uuid",
    "name": "Book Title",
    "author": "Author Name"
  }
}
```

### GET /books
Get all books in the bookstore.

**Response:**
```json
{
  "message": "Books retrieved successfully",
  "count": 2,
  "books": [
    {
      "id": "uuid-1",
      "name": "Book Title 1",
      "author": "Author 1"
    },
    {
      "id": "uuid-2",
      "name": "Book Title 2",
      "author": "Author 2"
    }
  ]
}
```

### GET /books/{id}
Get a specific book by its ID.

**Response:**
```json
{
  "message": "Book retrieved successfully",
  "book": {
    "id": "uuid-1",
    "name": "Book Title",
    "author": "Author Name"
  }
}
```

## Installation and Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. For development with auto-reload:
```bash
npm run dev
```

The server will start on port 3000 by default. You can set a custom port using the `PORT` environment variable.

## Testing

You can test the API using curl, Postman, or any HTTP client:

### Add a book:
```bash
curl -X POST http://localhost:3000/books \
  -H "Content-Type: application/json" \
  -d '{"name": "The Great Gatsby", "author": "F. Scott Fitzgerald"}'
```

### Get all books:
```bash
curl http://localhost:3000/books
```

### Get a specific book:
```bash
curl http://localhost:3000/books/{book-id}
```

## Project Structure

```
book-manager/
├── app.js          # Main application file
├── package.json    # Project dependencies and scripts
└── README.md       # This file
```
