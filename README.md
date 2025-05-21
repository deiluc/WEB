# Grade 10 Web Application

A full-stack web application built with Node.js, React, and MongoDB that meets the requirements for a grade 10 project.

## Features

- User authentication (login/register)
- Role-based access control (user/admin)
- CRUD operations for data management
- Responsive design using Material-UI
- Client-side form validation
- Secure password handling
- MongoDB database integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   NODE_ENV=development
   ```

2. Create a `.env` file in the client directory:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

## Running the Application

1. Start the backend server:
   ```bash
   npm run dev
   ```

2. In a new terminal, start the frontend development server:
   ```bash
   cd client
   npm start
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Deployment

### MongoDB Atlas Setup

1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new project
3. Create a free cluster
4. Set up database access (create a user)
5. Set up network access (allow access from anywhere)
6. Get your connection string

### Render.com Deployment

1. Create a Render.com account
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure the service:
   - Build Command: `npm install && cd client && npm install && npm run build`
   - Start Command: `node server.js`
5. Add environment variables:
   - MONGODB_URI
   - JWT_SECRET
   - NODE_ENV=production
   - REACT_APP_API_URL=https://your-app-name.onrender.com

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js        # Main App component
│   │   └── index.js      # Entry point
├── models/                # MongoDB models
├── routes/               # API routes
├── middleware/           # Custom middleware
├── server.js            # Express server
└── package.json         # Project dependencies
```

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user

### Data Management
- GET /api/data - Get all data for the user
- POST /api/data - Create new data
- PUT /api/data/:id - Update data
- DELETE /api/data/:id - Delete data

## Security Features

- Password hashing using bcrypt
- JWT authentication
- Protected routes
- Input validation
- CORS enabled
- Secure HTTP headers

## Technologies Used

- Frontend:
  - React
  - Material-UI
  - Axios
  - React Router
  - Bootstrap

- Backend:
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - JWT
  - bcryptjs 