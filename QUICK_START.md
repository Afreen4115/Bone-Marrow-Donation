# Quick Start Guide

## Current Status Check

✅ **Node.js**: Installed (v22.15.0)  
✅ **npm**: Installed (v10.9.2)  
✅ **MongoDB**: Installed but **NOT running**  
✅ **Backend Dependencies**: Installed  
❌ **Frontend Dependencies**: NOT installed  

## Steps to Run the Project

### 1. Start MongoDB

```bash
# Start MongoDB service
sudo systemctl start mongod
# OR if that doesn't work:
mongod --dbpath /var/lib/mongodb
# OR if you need to specify a custom path:
mongod --dbpath ~/data/db
```

To check if MongoDB is running:
```bash
pgrep -x mongod && echo "MongoDB is running" || echo "MongoDB is not running"
```

### 2. Install Frontend Dependencies

```bash
cd /home/afreen/GITHUB_PROJECTS/BoneMarrowDonation/client
npm install
```

### 3. Start Backend Server (Terminal 1)

```bash
cd /home/afreen/GITHUB_PROJECTS/BoneMarrowDonation/express-server
npm start
```

Backend will run on: **http://localhost:4000**

### 4. Start Frontend Client (Terminal 2)

```bash
cd /home/afreen/GITHUB_PROJECTS/BoneMarrowDonation/client
npm start
```

Frontend will run on: **http://localhost:3000**

## Admin Login

- URL: http://localhost:3000/Admin
- Username: **BMD**
- Password: **BMDbmd@123**

## API Documentation

- Swagger UI: http://localhost:4000/api-docs

