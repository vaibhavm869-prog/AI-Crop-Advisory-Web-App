# Agri Chatbot Backend

A RESTful backend API built using Express.js, MongoDB Atlas, and Mongoose for managing crop information.

---

## Features

- CRUD operations for crops
- MongoDB Atlas integration
- Mongoose Schema
- REST API
- Search crops by name
- JSON request/response

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman

---

## Database

This project uses **MongoDB Atlas** as the database and **Mongoose** as the ODM.

### Why MongoDB?

- Flexible NoSQL document database
- Easy integration with Node.js
- Cloud hosted using MongoDB Atlas
- Scalable and suitable for REST APIs

---

## Database Schema

![Database Schema](images/schema.png)

---

## Crop Schema

| Field | Type |
|-------|------|
| _id | ObjectId |
| name | String |
| season | String |
| disease | String |

---

## API Endpoints

### GET

```
GET /api/crops
```

Returns all crops.

---

### GET BY ID

```
GET /api/crops/:id
```

Returns a single crop.

---

### SEARCH

```
GET /api/crops/search?q=wheat
```

Searches crops by name.

---

### CREATE

```
POST /api/crops
```

Creates a new crop.

Example JSON

```json
{
    "name":"Rice",
    "season":"Monsoon",
    "disease":"Blast"
}
```

---

### UPDATE

```
PUT /api/crops/:id
```

Updates an existing crop.

---

### DELETE

```
DELETE /api/crops/:id
```

Deletes a crop.

---

## Database Setup

### 1. Clone the repository

```
git clone <repository-url>
```

### 2. Install dependencies

```
npm install
```

### 3. Create a .env file

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Start the server

```
node server.js
```

Server starts at

```
http://localhost:5000
```

---

## Environment Variables

Create a `.env` file.

Required variables

```
MONGO_URI
PORT
```

---

## Author

Vaibhav
