# Fantasy Football Stats App

This is a small project that retrieves fantasy football data from the Yahoo Fantasy Football API, stores additional data into a PostgreSQL database, and allows users to manage fantasy stats, historical matchups, and more. The application is built using **NestJS** as the backend framework and **Angular** for the frontend.

## Features

- Integration with Yahoo Fantasy Football API
- PostgreSQL database for additional data storage
- User management (CRUD operations)
- JWT-based authentication for secure endpoints
- Easy to extend with new features and endpoints

## Prerequisites

To get started, you’ll need the following:

- **Node.js** (v16.x or higher)
- **npm** (comes with Node.js)
- **PostgreSQL** (version 13 or higher)
- **PGAdmin 4** for database management (optional)
- **Yahoo Developer Account** for API keys

## Getting Started

### 1. Clone the Repository


git clone https://github.com/your-username/fantasy-football-stats-app.git
cd fantasy-football-stats-app

### 2. Install Dependencies
```
npm install
```

### Create .env file
Create a .env file in the root directory and add the following configuration values:


```
# App settings
PORT=3000

# JWT Secret Key
JWT_SECRET=your_secret_key

# Yahoo API credentials
YAHOO_CLIENT_ID=your_yahoo_client_id
YAHOO_CLIENT_SECRET=your_yahoo_client_secret

# Database settings
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_db_password
DB_NAME=ffl-stats

# Example configuration for development environment
NODE_ENV=development
```

### Create PostgreSQL Database

#### Example of creating a PostgreSQL database via terminal
psql -U postgres
CREATE DATABASE fantasy_football;

### 5. Start the Application
Run the following command to start the server:

```
npm run start
```