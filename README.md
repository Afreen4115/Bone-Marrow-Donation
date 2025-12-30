# 🩸 Bone Marrow Donation (BMD) Platform

A comprehensive web application platform that connects bone marrow donors, patients, and hospitals to facilitate life-saving bone marrow donations. The platform streamlines the donation process, manages donor registrations, patient requests, and hospital coordination.

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-18.2.0-blue.svg)
![MongoDB](https://img.shields.io/badge/mongodb-6.10.3-green.svg)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Admin Access](#-admin-access)
- [Usage](#-usage)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### For Donors
- **Donor Registration**: Easy registration process with profile management
- **Medical Information**: Upload medical reports and HLA test results
- **Donation Tracking**: Track donation requests and status
- **Profile Management**: Manage personal information and medical history

### For Patients
- **Patient Registration**: Register as a patient seeking bone marrow
- **Donor Matching**: Search and match with compatible donors
- **Order Management**: Place orders for bone marrow swab kits
- **Medical Reports**: Upload and manage medical reports

### For Hospitals
- **Hospital Registration**: Register hospitals on the platform
- **Patient Management**: Manage patient records and requests
- **Donor Coordination**: Coordinate with donors for donations
- **Report Management**: Handle medical reports and documentation

### Admin Features
- **Dashboard**: Comprehensive admin dashboard
- **User Management**: Manage donors, patients, and hospitals
- **Data Analytics**: View and analyze platform data
- **Order Management**: Track and manage all orders
- **Report Management**: Access and manage all medical reports

## 🛠 Tech Stack

### Frontend
- **React** 18.2.0 - UI library
- **Redux Toolkit** 1.9.1 - State management
- **React Router** 6.4.2 - Routing
- **React Bootstrap** 2.5.0 - UI components
- **Axios** 1.3.4 - HTTP client
- **Socket.io Client** 4.6.1 - Real-time communication

### Backend
- **Node.js** - Runtime environment
- **Express.js** 4.18.2 - Web framework
- **MongoDB** 6.10.3 - Database (via Mongoose)
- **Socket.io** 4.6.1 - Real-time communication
- **Multer** 1.4.5 - File upload handling
- **Bcryptjs** 2.4.3 - Password hashing
- **Swagger** - API documentation

### Additional Tools
- **Morgan** - HTTP request logger
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development server auto-reload

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Comes with Node.js
- **MongoDB** (v4.4 or higher) - [Download](https://www.mongodb.com/try/download/community)

### MongoDB Installation

#### Linux (Ubuntu/Debian)
```bash
sudo apt-get update
sudo apt-get install -y mongodb
sudo systemctl start mongod
sudo systemctl enable mongod
```

#### macOS
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

#### Windows
Download and install from [MongoDB Download Center](https://www.mongodb.com/try/download/community)

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd BoneMarrowDonation
```

### 2. Install Backend Dependencies

```bash
cd express-server
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install --legacy-peer-deps
```

> **Note**: The `--legacy-peer-deps` flag is required due to a peer dependency conflict between `redux-form` and `react-redux`. This is safe to use and won't affect functionality.

## 🏃 Getting Started

### Step 1: Start MongoDB

Ensure MongoDB is running on your system:

```bash
# Check if MongoDB is running
pgrep -x mongod && echo "MongoDB is running" || echo "MongoDB is not running"

# If not running, start it:
# Linux
sudo systemctl start mongod

# macOS
brew services start mongodb-community

# Or run directly
mongod
```

The application connects to MongoDB at: `mongodb://0.0.0.0:27017/BMD`

### Step 2: Start the Backend Server

Open a terminal and navigate to the backend directory:

```bash
cd express-server
npm start
```

For development with auto-reload:

```bash
npm run devStart
```

The backend server will start on **http://localhost:4000**

### Step 3: Start the Frontend Client

Open a **new terminal** and navigate to the client directory:

```bash
cd client
npm start
```

The frontend application will start on **http://localhost:3000** and automatically open in your default browser.

## 📁 Project Structure

```
BoneMarrowDonation/
├── client/                      # React frontend application
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── Admin/              # Admin dashboard components
│   │   ├── components/         # Reusable React components
│   │   │   ├── Contact.js
│   │   │   ├── Donate.js
│   │   │   ├── DonorForm.js
│   │   │   ├── HospitalForm.js
│   │   │   ├── Login.js
│   │   │   ├── Navbar.js
│   │   │   ├── OrderSwab.js
│   │   │   ├── PatientForm.js
│   │   │   ├── Register.js
│   │   │   └── ...
│   │   ├── App.js              # Main App component
│   │   └── index.js            # Entry point
│   ├── package.json
│   └── README.md
│
├── express-server/              # Express backend server
│   ├── models/                 # MongoDB schemas
│   │   ├── RegisterDataSchema.js
│   │   ├── LoginDataSchema.js
│   │   ├── DonorsDataSchema.js
│   │   ├── PatientsDataSchema.js
│   │   ├── HospitalsDataSchema.js
│   │   ├── OrdersDataSchema.js
│   │   └── UploadsDataSchema.js
│   ├── Donors/                 # Donor file uploads
│   ├── Hospitals/              # Hospital file uploads
│   ├── Medicalreports/         # Medical report uploads
│   ├── HLAreports/             # HLA report uploads
│   ├── Results/                # Result file uploads
│   ├── log/                    # Application logs
│   ├── index.js                # Main server file
│   └── package.json
│
├── README.md                    # This file
├── SETUP_GUIDE.md              # Detailed setup instructions
└── QUICK_START.md              # Quick reference guide
```

## 📚 API Documentation

The backend API is fully documented using Swagger. Once the backend server is running, access the interactive API documentation at:

**http://localhost:4000/api-docs**

### Main API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/read` | Get all registered users |
| POST | `/read` | Register a new user |
| GET | `/read2` | Get all login records |
| POST | `/read2` | User login |
| GET | `/read3` | Get all donors |
| POST | `/donors` | Register a new donor |
| GET | `/read4` | Get all hospitals |
| POST | `/hospitals` | Register a new hospital |
| GET | `/read5` | Get all patients |
| POST | `/patients` | Register a new patient |
| GET | `/read6` | Get all orders |
| POST | `/orders` | Create a new order |
| GET | `/read7` | Get all uploads/reports |
| POST | `/read7` | Upload a report |
| DELETE | `/delete/:id` | Delete a record |

### File Upload Endpoints

| Endpoint | Description |
|----------|-------------|
| POST `/image` | Upload donor image |
| POST `/image2` | Upload result file |
| POST `/image3` | Upload hospital document |
| POST `/image4` | Upload medical report |
| POST `/image5` | Upload HLA report |

## 🔐 Admin Access

Access the admin dashboard at: **http://localhost:3000/Admin**

**Default Credentials:**
- **Username**: `BMD`
- **Password**: `BMDbmd@123`

> ⚠️ **Security Note**: Change the default admin credentials in production!

## 💻 Usage

### For Donors

1. Navigate to the registration page
2. Fill in personal and medical information
3. Upload required documents (ID proof, medical reports)
4. Submit registration
5. Track donation requests through your dashboard

### For Patients

1. Register as a patient
2. Provide medical information and blood group
3. Upload medical reports and HLA test results
4. Search for compatible donors
5. Place orders for bone marrow swab kits

### For Hospitals

1. Register your hospital
2. Upload hospital ID proof
3. Manage patient records
4. Coordinate with donors
5. Track orders and donations

## 🔧 Troubleshooting

### MongoDB Connection Issues

**Problem**: `MongooseError: connect ECONNREFUSED`

**Solution**: 
- Ensure MongoDB is running: `sudo systemctl status mongod`
- Check MongoDB connection string in `express-server/index.js`
- Verify MongoDB is accessible on port 27017

### Port Already in Use

**Problem**: `Error: listen EADDRINUSE: address already in use :::4000`

**Solution**:
- Kill the process using the port: `lsof -ti:4000 | xargs kill -9`
- Or change the port in `express-server/index.js`

### Dependency Installation Issues

**Problem**: `npm error ERESOLVE could not resolve`

**Solution**:
- Use `--legacy-peer-deps` flag: `npm install --legacy-peer-deps`
- Delete `node_modules` and `package-lock.json`, then reinstall

### Frontend Not Connecting to Backend

**Problem**: API calls failing with CORS errors

**Solution**:
- Ensure backend is running on port 4000
- Check CORS configuration in `express-server/index.js`
- Verify API endpoint URLs in frontend code

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write clear commit messages
- Test your changes thoroughly
- Update documentation as needed



## 🙏 Acknowledgments

- Thanks to all contributors who have helped improve this project
- Special thanks to the medical community for their support

---

**Made with ❤️ for the bone marrow donation community**


