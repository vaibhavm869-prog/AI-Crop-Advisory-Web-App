# Agri Chatbot Backend
## Database

This project uses MongoDB Atlas with Mongoose.

### Why MongoDB?

- NoSQL document database
- Easy integration with Node.js
- Flexible schema
- Cloud hosted using MongoDB Atlas
- ## Setup Database

1. Create a MongoDB Atlas Cluster.
2. Create a database user.
3. Whitelist your IP.
4. Copy the MongoDB connection string.
5. Create a `.env` file.

Example:

MONGO_URI=your_connection_string
PORT=5000

Run:

npm install
node server.js
## API Endpoints

GET /api/crops

GET /api/crops/:id

GET /api/crops/search?q=

POST /api/crops

PUT /api/crops/:id

DELETE /api/crops/:id
