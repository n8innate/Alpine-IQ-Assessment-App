# Alpine-IQ-Assessment-App

A simple contact directory app

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Docker
- Node.js

## Setting Up and Running the Application

### Step 1: Clone the Repository

First, clone this repository to your local machine using Git:

```bash
git clone <repository-url>
cd <repository-name>
```

### Step 2: Start the Backend and Database with Docker Compose

Navigate to the root of the project (if you're not already there) and run the following command to start the backend server and PostgreSQL database using Docker Compose:

```bash
docker compose up --build
```
Wait for the Backend to finish building before moving onto step 3. 

### Step 3: Start the Frontend Application

Open a new terminal window or tab. Then, navigate to the `client` directory inside the project:

```bash
cd client
```

Install the required npm packages for the frontend application:

```bash
npm install
```

Once the installation is complete, start the React development server:

```bash
npm run start
```

This command starts the frontend application on a development server, typically accessible at [http://localhost:3001](http://localhost:3001).

## Using the Application

After starting both the backend and frontend as described above, you can use the application by navigating to [http://localhost:3001](http://localhost:3001) in your web browser. From there, you'll be able to view the list of contacts and add new contacts using the provided form.

## Stopping the Application

To stop the Docker containers running the backend and database, press `Ctrl+C` in the terminal where you ran `docker compose up`, or run the following command in the root directory of the project:

```bash
docker compose down
```

To stop the frontend development server, press `Ctrl+C` in the terminal where you ran `npm run start`.

