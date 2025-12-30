# Bone Marrow Donation Project - Setup Guide

This project consists of two main parts:
- **Backend**: Express server (runs on port 4000)
- **Frontend**: React client (runs on port 3000)

## Prerequisites

1. **Node.js and npm** - Make sure you have Node.js installed (version 14 or higher recommended)
2. **MongoDB** - The backend uses MongoDB. You need to have MongoDB installed and running on your system

## Setup Instructions

### Step 1: Install MongoDB (if not already installed)

If MongoDB is not installed, you can:
- **Linux**: `sudo apt-get install mongodb` or use MongoDB's official installation guide
- **macOS**: `brew install mongodb-community`
- **Windows**: Download from [MongoDB website](https://www.mongodb.com/try/download/community)

Start MongoDB service:
```bash
# Linux (may vary based on installation method)
sudo systemctl start mongod
# OR
mongod

# macOS
brew services start mongodb-community

# Windows
# MongoDB usually runs as a service automatically
```

### Step 2: Install Backend Dependencies

```bash
cd express-server
npm install
```

### Step 3: Install Frontend Dependencies

```bash
cd ../client
npm install
```

### Step 4: Run the Backend Server

Open a terminal and run:

```bash
cd express-server
npm start
# OR for development with auto-reload:
npm run devStart
```

The backend will start on **http://localhost:4000**

You can access:
- API: http://localhost:4000
- Swagger API Documentation: http://localhost:4000/api-docs

### Step 5: Run the Frontend Client

Open a **new terminal** and run:

```bash
cd client
npm start
```

The frontend will start on **http://localhost:3000** and should automatically open in your browser.

## Admin Access

- **URL**: http://localhost:3000/Admin
- **Username**: BMD
- **Password**: BMDbmd@123

## Quick Start (All Commands)

If you want to run everything at once, you can use these commands in separate terminals:

**Terminal 1 (Backend):**
```bash
cd /home/afreen/GITHUB_PROJECTS/BoneMarrowDonation/express-server
npm install  # Only needed first time
npm start
```

**Terminal 2 (Frontend):**
```bash
cd /home/afreen/GITHUB_PROJECTS/BoneMarrowDonation/client
npm install  # Only needed first time
npm start
```

## Troubleshooting

1. **MongoDB Connection Error**: Make sure MongoDB is running on `localhost:27017`
   - Check: `mongosh` or `mongo` command should connect successfully

2. **Port Already in Use**: 
   - Backend (4000): Change `PORT` in `express-server/index.js` or set `process.env.PORT`
   - Frontend (3000): React will prompt to use a different port

3. **Dependencies Issues**: 
   - Delete `node_modules` and `package-lock.json` in both folders
   - Run `npm install` again

4. **Module Not Found**: Make sure you've run `npm install` in both `express-server` and `client` directories

## Project Structure

```
BoneMarrowDonation/
├── client/              # React frontend
│   ├── src/            # Source code
│   └── package.json    # Frontend dependencies
├── express-server/     # Express backend
│   ├── models/         # MongoDB models
│   ├── index.js        # Main server file
│   └── package.json    # Backend dependencies
└── README.md
```

## Database

The application uses MongoDB database named `BMD` and connects to:
- **Connection String**: `mongodb://0.0.0.0:27017/BMD`

Make sure MongoDB is accessible at this address before starting the backend server.

