# **User Management App**

## Screenshots

![User Management App Screenshot](https://github.com/Ousman37/user-management-app/blob/main/Screenshot_2024-08-25_at_15.26.14.png)

This project is a full-stack User Management Application, showcasing a variety of development skills including front-end and back-end technologies. The app allows users to register, log in, view and manage profiles, and interact with protected routes.

## **Table of Contents**

- [**User Management App**](#user-management-app)
  - [Screenshots](#screenshots)
  - [**Table of Contents**](#table-of-contents)
  - [**Features**](#features)
  - [**Technologies Used**](#technologies-used)
    - [**Frontend:**](#frontend)
    - [**Backend:**](#backend)
    - [**Other Tools:**](#other-tools)
  - [**Project Structure**](#project-structure)
  - [**Setup and Installation**](#setup-and-installation)
    - [**Prerequisites:**](#prerequisites)
    - [**Installation Steps:**](#installation-steps)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Create a `.env`File](#create-a-envfile)
  - [Start the Backend Server](#start-the-backend-server)
  - [Start the Frontend Server](#start-the-frontend-server)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
    - [Auth Routes](#auth-routes)
    - [Protected Routes](#protected-routes)
  - [Contributing](#contributing)
  - [License](#license)

## **Features**

- **User Registration and Authentication:**
  - Users can register an account.
  - Secure login with JWT authentication.
  - Profile management.

- **Protected Routes:**
  - Access to certain pages is restricted to authenticated users only.

- **Responsive UI:**
  - Mobile-friendly design.
  - Responsive layouts for different devices.

- **Toaster Notifications:**
  - User feedback for login and registration actions.

## **Technologies Used**

### **Frontend:**

- **React.js** - For building the user interface.
- **Tailwind CSS** - For responsive and modern design.
- **React Router** - For handling routing within the app.

### **Backend:**

- **Node.js** - JavaScript runtime for server-side code.
- **Express.js** - Web framework for Node.js.
- **MongoDB** - NoSQL database for storing user data.
- **Mongoose** - ODM for MongoDB.
- **JWT (JSON Web Tokens)** - For secure authentication.

### **Other Tools:**

- **Axios** - For making HTTP requests from the client.
- **ESLint/Prettier** - For code formatting and linting.

## **Project Structure**

- **user-management-app/**
  - **server/** - Backend code
    - **config/** - Configuration files (e.g., JWT Secret)
    - **middleware/** - Authentication middleware
    - **models/** - Mongoose models
    - **routes/** - API routes
    - `server.js` - Main server file
  - **user-management-frontend/** - Frontend code
    - **public/** - Public assets
    - **src/** - Source code
      - **api/** - API service files
      - **components/** - React components
        - **form/** - Login and Register components
        - **home/** - Home component
        - **modal/** - Login/Register modal component
        - **navigation/** - Navbar component
        - **profile/** - Profile component
      - `App.js` - Main React component
      - `index.js` - Entry point for React
      - `index.css` - Global styles
  - `package.json` - Project dependencies and scripts
  - `README.md` - Project documentation
  - `.gitignore` - Files and directories to ignore in Git

## **Setup and Installation**

### **Prerequisites:**

- **Node.js** (v14 or later)
- **MongoDB** (Ensure MongoDB is installed and running)

### **Installation Steps:**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/user-management-app.git
   cd user-management-app
   ```

## Backend Setup

```bash
cd server
npm install
 ```

## Frontend Setup

```bash
cd user-management-frontend
npm install
 ```

## Create a `.env`File

Create a `.env` file in the server directory with the following content:
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=9000

## Start the Backend Server

```bash
npm start
```

## Start the Frontend Server

```bash
npm start
```

## Usage

- Visit [http://localhost:3000](http://localhost:3000) to view the app in your browser.
- Register a new user or log in using an existing account.
- Access protected routes and manage your profile.

## API Endpoints

### Auth Routes

- `POST /api/register` - Register a new user.
- `POST /api/login` - Authenticate a user and receive a token.

### Protected Routes

- `GET /api/profile` - Retrieve the authenticated user's profile (requires JWT).

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
